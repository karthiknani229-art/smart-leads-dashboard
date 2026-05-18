import {
  useEffect,
  useState,
} from 'react';

import toast from 'react-hot-toast';

import api from '../api/axios';

interface Props {
  onSuccess: () => void;
  editingLead: any;
  setEditingLead: any;
}

function LeadForm({
  onSuccess,
  editingLead,
  setEditingLead,
}: Props) {

  const [name, setName] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [status, setStatus] =
    useState('New');

  const [source, setSource] =
    useState('Website');

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {

    if (editingLead) {

      setName(editingLead.name);

      setEmail(editingLead.email);

      setStatus(
        editingLead.status
      );

      setSource(
        editingLead.source
      );
    }

  }, [editingLead]);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (!name.trim()) {

      return toast.error(
        'Name required'
      );
    }

    try {

      setLoading(true);

      if (editingLead) {

        await api.put(
          `/leads/${editingLead._id}`,
          {
            name,
            email,
            status,
            source,
          }
        );

        toast.success(
          'Lead updated'
        );

      } else {

        await api.post(
          '/leads',
          {
            name,
            email,
            status,
            source,
          }
        );

        toast.success(
          'Lead created'
        );
      }

      setName('');
      setEmail('');
      setStatus('New');
      setSource('Website');

      setEditingLead(null);

      onSuccess();

    } catch (error) {

      toast.error(
        'Something went wrong'
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white
        text-black
        p-6
        rounded-xl
        shadow
        mb-6
      "
    >

      <h2 className="
        text-2xl
        font-bold
        mb-4
      ">

        {editingLead
          ? 'Edit Lead'
          : 'Create Lead'}

      </h2>

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-4
      ">

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="
            border
            p-3
            rounded-lg
          "
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="
            border
            p-3
            rounded-lg
          "
        />

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="
            border
            p-3
            rounded-lg
          "
        >

          <option>New</option>
          <option>Contacted</option>
          <option>Qualified</option>
          <option>Lost</option>

        </select>

        <select
          value={source}
          onChange={(e) =>
            setSource(e.target.value)
          }
          className="
            border
            p-3
            rounded-lg
          "
        >

          <option>Website</option>
          <option>Instagram</option>
          <option>Referral</option>

        </select>

      </div>

      <button
        disabled={loading}
        className="
          mt-4
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
        "
      >

        {loading
          ? 'Processing...'
          : editingLead
          ? 'Update Lead'
          : 'Create Lead'}

      </button>

    </form>
  );
}

export default LeadForm;
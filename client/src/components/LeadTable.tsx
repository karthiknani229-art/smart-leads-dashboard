import toast from 'react-hot-toast';

import api from '../api/axios';

interface Lead {
  _id: string;
  name: string;
  email: string;
  status: string;
  source: string;
}

interface Props {
  leads: Lead[];
  fetchLeads: () => void;
  user: any;
  setEditingLead: any;
}

function LeadTable({
  leads,
  fetchLeads,
  user,
  setEditingLead,
}: Props) {

  const deleteLead = async (
    id: string
  ) => {

    try {

      await api.delete(
        `/leads/${id}`
      );

      toast.success(
        'Lead deleted'
      );

      fetchLeads();

    } catch (error) {

      toast.error(
        'Delete failed'
      );

    }
  };

  const getStatusColor = (
    status: string
  ) => {

    switch (status) {

      case 'Qualified':
        return 'bg-green-100 text-green-700';

      case 'Contacted':
        return 'bg-blue-100 text-blue-700';

      case 'Lost':
        return 'bg-red-100 text-red-700';

      default:
        return 'bg-yellow-100 text-yellow-700';
    }
  };

  return (
    <div className="
      bg-white
      rounded-2xl
      shadow-sm
      overflow-hidden
      border
      border-gray-200
    ">

      <div className="overflow-x-auto">

        <table className="
          w-full
          min-w-[700px]
        ">

          <thead className="
            bg-gray-100
            border-b
          ">

            <tr>

              <th className="
                text-left
                px-6
                py-4
                font-semibold
                text-gray-700
              ">
                Name
              </th>

              <th className="
                text-left
                px-6
                py-4
                font-semibold
                text-gray-700
              ">
                Email
              </th>

              <th className="
                text-left
                px-6
                py-4
                font-semibold
                text-gray-700
              ">
                Status
              </th>

              <th className="
                text-left
                px-6
                py-4
                font-semibold
                text-gray-700
              ">
                Source
              </th>

              <th className="
                text-left
                px-6
                py-4
                font-semibold
                text-gray-700
              ">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {leads.map((lead) => (

              <tr
                key={lead._id}
                className="
                  border-b
                  hover:bg-gray-50
                  transition
                "
              >

                <td className="
                  px-6
                  py-4
                  font-medium
                  text-gray-800
                ">
                  {lead.name}
                </td>

                <td className="
                  px-6
                  py-4
                  text-gray-600
                ">
                  {lead.email}
                </td>

                <td className="
                  px-6
                  py-4
                ">

                  <span className={`
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium
                    ${getStatusColor(
                      lead.status
                    )}
                  `}>

                    {lead.status}

                  </span>

                </td>

                <td className="
                  px-6
                  py-4
                  text-gray-600
                ">
                  {lead.source}
                </td>

                <td className="
                  px-6
                  py-4
                ">

                  <div className="
                    flex
                    gap-3
                  ">

                    <button
                      onClick={() =>
                        setEditingLead(
                          lead
                        )
                      }
                      className="
                        bg-yellow-500
                        hover:bg-yellow-600
                        text-white
                        px-4
                        py-2
                        rounded-lg
                        text-sm
                        font-medium
                        transition
                      "
                    >
                      Edit
                    </button>

                    {user?.role ===
                      'admin' && (

                      <button
                        onClick={() =>
                          deleteLead(
                            lead._id
                          )
                        }
                        className="
                          bg-red-500
                          hover:bg-red-600
                          text-white
                          px-4
                          py-2
                          rounded-lg
                          text-sm
                          font-medium
                          transition
                        "
                      >
                        Delete
                      </button>

                    )}

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {leads.length === 0 && (

        <div className="
          text-center
          py-16
          text-gray-500
          text-lg
        ">

          No leads found

        </div>

      )}

    </div>
  );
}

export default LeadTable;
import { useEffect, useState } from 'react';

import { saveAs } from 'file-saver';

import Papa from 'papaparse';

import toast from 'react-hot-toast';

import api from '../api/axios';

import LeadForm from '../components/LeadForm';

import Filters from '../components/Filters';

import LeadTable from '../components/LeadTable';

import Pagination from '../components/Pagination';

interface Lead {
  _id: string;
  name: string;
  email: string;
  status: string;
  source: string;
}

function Dashboard() {

  const [leads, setLeads] =
    useState<Lead[]>([]);

  const [search, setSearch] =
    useState('');

  const [status, setStatus] =
    useState('');

  const [source, setSource] =
    useState('');

  const [sort, setSort] =
    useState('latest');

  const [page, setPage] =
    useState(1);

  const [totalPages, setTotalPages] =
    useState(1);

  const [user, setUser] =
    useState<any>(null);

  const [editingLead, setEditingLead] =
    useState<any>(null);

  const fetchUser = async () => {

    try {

      const res =
        await api.get('/auth/me');

      setUser(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  const fetchLeads = async () => {

    try {

      const res =
        await api.get(
          `/leads?page=${page}&search=${search}&status=${status}&source=${source}&sort=${sort}`
        );

      setLeads(res.data.data);

      setTotalPages(
        res.data.pagination.totalPages
      );

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    fetchUser();

  }, []);

  useEffect(() => {

    const timer = setTimeout(() => {

      fetchLeads();

    }, 500);

    return () => clearTimeout(timer);

  }, [
    page,
    search,
    status,
    source,
    sort,
  ]);

  const logout = () => {

    localStorage.removeItem('token');

    window.location.href = '/login';
  };

  const exportCSV = () => {

    const cleanData =
      leads.map((lead) => ({
        name: lead.name,
        email: lead.email,
        status: lead.status,
        source: lead.source,
      }));

    const csv =
      Papa.unparse(cleanData);

    const blob =
      new Blob(
        [csv],
        {
          type:
            'text/csv;charset=utf-8;',
        }
      );

    saveAs(
      blob,
      'leads.csv'
    );
  };

  const importCSV = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file =
      e.target.files?.[0];

    if (!file) return;

    Papa.parse(file, {

      header: true,

      skipEmptyLines: true,

      complete: async (
        results: any
      ) => {

        try {

          const cleanData =
            results.data.map(
              (lead: any) => ({
                name: lead.name,
                email: lead.email,
                status: lead.status,
                source: lead.source,
              })
            );

          await api.post(
            '/leads/import',
            cleanData
          );

          toast.success(
            'CSV Imported Successfully'
          );

          fetchLeads();

        } catch (error) {

          toast.error(
            'Import failed'
          );

        }
      },
    });
  };

  return (
    <div className="
      min-h-screen
      bg-gray-100
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-8
      ">

        <div className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-6
          mb-8
        ">

          <div>

            <h1 className="
              text-4xl
              font-bold
              text-gray-900
            ">
              Smart Leads Dashboard
            </h1>

            {user && (

              <p className="
                text-gray-600
                mt-2
              ">

                Logged in as
                {' '}
                <span className="
                  font-semibold
                  capitalize
                ">
                  {user.role}
                </span>

              </p>

            )}

          </div>

          <div className="
            flex
            flex-wrap
            gap-3
          ">

            <label
              className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-5
                py-3
                rounded-lg
                cursor-pointer
                font-medium
                transition
              "
            >

              Import CSV

              <input
                type="file"
                accept=".csv"
                hidden
                onChange={importCSV}
              />

            </label>

            <button
              onClick={exportCSV}
              className="
                bg-green-600
                hover:bg-green-700
                text-white
                px-5
                py-3
                rounded-lg
                font-medium
                transition
              "
            >
              Export CSV
            </button>

            <button
              onClick={logout}
              className="
                bg-gray-900
                hover:bg-black
                text-white
                px-5
                py-3
                rounded-lg
                font-medium
                transition
              "
            >
              Logout
            </button>

          </div>

        </div>

        <LeadForm
          onSuccess={fetchLeads}
          editingLead={editingLead}
          setEditingLead={
            setEditingLead
          }
        />

        <Filters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          source={source}
          setSource={setSource}
          sort={sort}
          setSort={setSort}
        />

        <LeadTable
          leads={leads}
          fetchLeads={fetchLeads}
          user={user}
          setEditingLead={
            setEditingLead
          }
        />

        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />

      </div>

    </div>
  );
}

export default Dashboard;
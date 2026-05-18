interface Props {
  search: string;
  setSearch: React.Dispatch<
    React.SetStateAction<string>
  >;

  status: string;
  setStatus: React.Dispatch<
    React.SetStateAction<string>
  >;

  source: string;
  setSource: React.Dispatch<
    React.SetStateAction<string>
  >;

  sort: string;
  setSort: React.Dispatch<
    React.SetStateAction<string>
  >;
}

function Filters({
  search,
  setSearch,
  status,
  setStatus,
  source,
  setSource,
  sort,
  setSort,
}: Props) {

  return (
    <div className="
      bg-white
      p-4
      rounded-xl
      shadow
      mb-6
    ">

      <div className="
        grid
        grid-cols-1
        md:grid-cols-4
        gap-4
      ">

        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
            border
            p-3
            rounded-lg
            outline-none
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

          <option value="">
            All Status
          </option>

          <option value="New">
            New
          </option>

          <option value="Contacted">
            Contacted
          </option>

          <option value="Qualified">
            Qualified
          </option>

          <option value="Lost">
            Lost
          </option>

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

          <option value="">
            All Sources
          </option>

          <option value="Website">
            Website
          </option>

          <option value="Instagram">
            Instagram
          </option>

          <option value="Referral">
            Referral
          </option>

        </select>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
          className="
            border
            p-3
            rounded-lg
          "
        >

          <option value="latest">
            Latest
          </option>

          <option value="oldest">
            Oldest
          </option>

        </select>

      </div>

    </div>
  );
}

export default Filters;
import React, { useState, useEffect } from "react";

import { PAGE_OPTIONS } from "./constants/app.constants";
import Pagination from "./components/Pagination";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const [projects, setProjects] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);

  const fetchProjects = async () => {
    try {
      const res = await fetch('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json');
      const data = await res.json();
      setProjects(data);
      setTotalRecords(data.length);
    } catch {
      setProjects([]);
      setTotalRecords(0);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChangePage = (selectedPg) => setPage(selectedPg);

  const handleChangeResultsPerPage = (records) => {
    setResultsPerPage(records);
    setPage(1);
  };

  const getCurrentPageProducts = () => {
    return projects.slice((page - 1) * resultsPerPage, page * resultsPerPage);
  }

  return (
    <div>
      <ProjectList projects={getCurrentPageProducts()} />
      <Pagination
        page={page}
        pageOptions={PAGE_OPTIONS}
        totalRecords={totalRecords}
        resultsPerPage={resultsPerPage}
        onChangePage={handleChangePage}
        onChangeResultsPerPage={handleChangeResultsPerPage}
      />
    </div>
  );
};

export default App;

import React from "react";

import styles from "./component.module.css";

const ProjectList = (props) => {
  const { projects } = props;

  return (
    <div className={styles.projects_list}>
      <table className={styles.table}>
        <thead className={styles.table_head}>
          <tr>
            <th>S.No.</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr>
              <td>{project['s.no']}</td>
              <td>{project['percentage.funded']}</td>
              <td>{project['amt.pledged']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;

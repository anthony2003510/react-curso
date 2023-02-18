import "./task-style.css";
import PropTypes from "prop-types";
export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1>Mi primera tarea</h1>
      <span className={ready ? 'completedTask' : 'noncompletedTask'}>
        {ready ? 'tarea realizada' : 'tarea pendiente'}
      </span>
    </div>
  );
}

TaskCard.propTypes = {
  ready: PropTypes.bool.isRequired,
};

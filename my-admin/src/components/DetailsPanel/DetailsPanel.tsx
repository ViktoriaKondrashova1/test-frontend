import { useRecordContext } from "react-admin";
import "./DetailsPanel.scss";

const DetailsPanel = () => {
  const record = useRecordContext();
  return (
    <div className="details-panel">
      <div className="details-panel__content">
        <div className="details-panel__wrap">
          <h3 className="details-panel__title">Job title</h3>
          <div className="details-panel__text">{record.job_title}</div>
        </div>
        <div className="details-panel__job">
          <h3 className="details-panel__title">Industry</h3>
          <div className="details-panel__text">{record.industry}</div>
        </div>
        <div className="details-panel__job">
          <h3 className="details-panel__title">Location</h3>
          <div className="details-panel__text">{record.country}</div>
        </div>
        <div className="details-panel__job">
          <h3 className="details-panel__title">Description</h3>
          <div className="details-panel__text">{record.description}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPanel;

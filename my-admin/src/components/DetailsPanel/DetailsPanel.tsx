import { useRecordContext, useExpanded } from "react-admin";
import { useState } from "react";
import "./DetailsPanel.scss";

const DetailsPanel = () => {
  const record = useRecordContext();
  const expandedItem = useExpanded("contacts", record.id);
  const toggleExpanded = expandedItem[1];
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div className="details-panel">
      <button
        className="details-panel__close"
        onClick={() => toggleExpanded()}
      />
      <div className="details-panel__wrap">
        <div className="details-panel__content">
          <div className="details-panel__btn-wrap">
            {isShow ? (
              <h2 className="details-panel__name">{record.company}</h2>
            ) : (
              <button
                className="details-panel__button"
                onClick={() => setIsShow(true)}
              >
                <div className="details-panel__btn-icon" />
                Get access to name
              </button>
            )}
          </div>
          <div className="details-panel__info">
            <h3 className="details-panel__title">Job title</h3>
            <div className="details-panel__text">{record.job_title}</div>
            <h3 className="details-panel__title">Industry</h3>
            <div className="details-panel__text">{record.industry}</div>
            <h3 className="details-panel__title">Location</h3>
            <div className="details-panel__text">{record.country}</div>
            <h3 className="details-panel__title">Description</h3>
            <div className="details-panel__text">{record.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPanel;

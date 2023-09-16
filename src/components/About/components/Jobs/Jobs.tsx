import { useState } from "react";
import { jobs } from "./data";
import { FormattedMessage } from "react-intl";

export const Jobs = () => {
  const [showJobs, setShowJobs] = useState(2);

  const handleSeeMore = () => {
    if (showJobs === jobs.length) {
      setShowJobs(2);
    } else {
      setShowJobs(jobs.length);
    }
  };

  return (
    <div className="max-w-[450px] w-full flex flex-col gap-5 p-2">
      <p className="text-xl font-medium text-primary  border-2 border-accent p-2 rounded-md">
      <FormattedMessage id='jobs' />
      </p>
      {jobs.slice(0, showJobs).map((job) => (
        <div className="text-sm flex flex-col gap-1" key={job.company}>
          <div>
            <h4 className="font-bold">{job.company}</h4>
            <p className="font-medium">{<FormattedMessage id={job.job} />}</p>
            <p>{job.period}</p>
          </div>
          <p className="border-l-2 border-primary p-1">
            {<FormattedMessage id={job.description} />}
          </p>
        </div>
      ))}
      <button onClick={handleSeeMore}>
        {showJobs === jobs.length ? "Ver menos" : "Ver mais"}
      </button>
    </div>
  );
};

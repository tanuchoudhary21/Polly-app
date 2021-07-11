import React, { useState, useEffect } from "react";
import { isNil, isEmpty, either } from "ramda";

import Container from "components/Container";
import PageLoader from "components/PageLoader";
import ListPolls from "components/Polls/ListPolls";
import pollsApi from "apis/polls";

const Dashboard = ({ history }) => {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPolls = async () => {
    try {
      const response = await pollsApi.list();
      setPolls(response.data.polls);
      logger.info(response.data.polls);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPolls();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  if (either(isNil, isEmpty)(polls)) {
    return (
      <Container>
        <h1 className="text-xl leading-5 text-center">No Polls Yet 😔</h1>
      </Container>
    );
  }

  return (
    <Container>
      <ListPolls data={polls} />
    </Container>
  );
};

export default Dashboard;

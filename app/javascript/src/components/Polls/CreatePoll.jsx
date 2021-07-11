import React, { useState, useEffect } from "react";
import Container from "components/Container";
import PollForm from "./Form/PollForm";
// import PageLoader from "components/PageLoader";
import pollsApi from "apis/polls";
// import usersApi from "apis/users";

const CreatePoll = ({ history }) => {
  const [title, setTitle] = useState("");
  //   const [option_1, setOption_1] = useState("");
  //   const [option_2, setOption_2] = useState("");
  //   const [option_3, setOption_3] = useState("");
  //   const [option_4, setOption_4] = useState("");
  //   const [userId, setUserId] = useState("");
  //   const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const [pageLoading, setPageLoading] = useState(true);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await pollsApi.create({ poll: { title } });
      setLoading(false);
      history.push("/");
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  //   if (pageLoading) {
  //     return <PageLoader />;
  //   }

  return (
    <Container>
      <PollForm
        setTitle={setTitle}
        // setUserId={setUserId}
        // setOption_1={setOption_1}
        // setOption_2={setOption_2}
        // setOption_3={setOption_3}
        // setOption_4={setOption_4}
        loading={loading}
        handleSubmit={handleSubmit}
        // users={users}
      />
    </Container>
  );
};

export default CreatePoll;

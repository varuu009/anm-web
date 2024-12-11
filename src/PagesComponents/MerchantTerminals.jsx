import React, { useEffect } from "react";
import StyledTable from "../Containers/Table";
import Title from "../Containers/Title";
import { useSelector, useDispatch } from "react-redux";
import { fetchTerminals } from "../reduxtoolkit/Slices/terminalSlice";
import Loading from "../components/Loading";
import { formatDate } from "../Utiles/dateFormat";

const TerminalsComponent = () => {
  const { terminals, status, error } = useSelector((state) => state.terminals);
  const dispatch = useDispatch();

  const merchantTerminalsData =
    terminals && terminals.filter((item) => item.terminalStatus !== null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTerminals());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Title data={"Merchant Terminals"} />
      <StyledTable
        data={merchantTerminalsData.map((terminal) => ({
          firstValue: terminal.id,
          secondValue: terminal.mobileNumber,
          thirdValue:  terminal.terminalStatus.toUpperCase(),
          forthValue: formatDate(terminal.createdTimeStamp),
        }))}
        titles={["id", "Mobile Number", "Status", "OnBoarded"]}
      />
    </div>
  );
};

export default TerminalsComponent;

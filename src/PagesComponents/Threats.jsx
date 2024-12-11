
import React, { useEffect } from 'react';
import StyledTable from "../Containers/Table";
import Title from "../Containers/Title";import { useDispatch, useSelector } from 'react-redux';
import { fetchThreats } from '../reduxtoolkit/Slices/threats';
import { formatDate } from "../Utiles/dateFormat";
const Threats = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.threats);
  console.log(data&&data)
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchThreats());
    }
  }, [dispatch, status]);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  const tableData = data?.threatsResponseList?.map((item) => ({
    firstValue: item.id,
 
    secondValue : item.threatId,
    thirdValue: item.threatSeverity,
    fourthValue:item.threatGroupType,
    fifthValue:formatDate(item.updatedTime)
  }));
  return (
    <>
      <Title data={"Threats"} />
      {tableData ? (
        <StyledTable data={tableData} titles={["ID", "Name","threatSeverity","Status","threshold"]} />
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default Threats;

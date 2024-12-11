// src/components/PolicyList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPolicies } from "../reduxtoolkit/Slices/policieSlice";
import StyledTable from "../Containers/Table";
import Title from "../Containers/Title";
const PolicyList = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.policies);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPolicies());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }


  const tableData = data?.policyThreatList?.map((item) => ({
    firstValue: item.policyDetails.id,
 
    secondValue : item.policyDetails.name,
    thirdValue: item.policyDetails.statusType,
    fourthValue:item.threatCount
  }));



  return (
    <div>
 <Title data={"Policies"} />
      {tableData ? (
        <StyledTable data={tableData} titles={["ID", "Name","Status","Threat Count"]} />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default PolicyList;

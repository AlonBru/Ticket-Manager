import React from 'react';

const Labels = (props) => {
  const { data } = props;
  if (data) {
    return (
      <>
        {data.map((label) => <button key={label} value={label} className="label">{label}</button>)}
      </>
    );
  } return <></>;
};
export default Labels;

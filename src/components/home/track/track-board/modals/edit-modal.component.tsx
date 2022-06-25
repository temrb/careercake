import React from 'react';

interface Props {
  categoryId: string;
}

const EditModal = (Props: Props) => {
  return (
    <div>
      <div>{Props.categoryId}</div>
    </div>
  );
};

export default EditModal;

import React from 'react';

const Labels = () => {
  const [selectedLabel, setSelectedLabel] = React.useState(null);
  const [selectedPriority, setSelectedPriority] = React.useState('low');

  const handleLabelSelected = (label) => {
    setSelectedLabel(label);
  };

  const handleLabelAdded = () => {
    setSelectedLabel(null);
  };

  const handlePrioritySelected = (priority) => {
    setSelectedPriority(priority);
  };

  return (
    <div>
      <AddLabelForm onLabelAdded={handleLabelAdded} />
      <LabelDropdown onSelectLabel={handleLabelSelected} />
      <PriorityDropdown onSelectPriority={handlePrioritySelected} />
      {selectedLabel && (
        <p>
          Selected Label: {selectedLabel.name} <br/> Priority: {selectedPriority}
        </p>
      )}
    </div>
  );
};

const labels = [
    { id: 1, name: 'Groceries' },
    { id: 2, name: 'Work' },
    { id: 3, name: 'Chores' },
    { id: 4, name: 'Shopping' },
    { id: 5, name: 'Project' }
];


const addNewLabel = (labelName) => {
const newLabel = {
    id: labels.length + 1,
    name: labelName
};
labels.push(newLabel);
};

const AddLabelForm = ({ onLabelAdded }) => {
    const [newLabel, setNewLabel] = React.useState('');
  
    const handleNewLabelChange = (event) => {
      setNewLabel(event.target.value);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      addNewLabel(newLabel);
      onLabelAdded();
    };
  
    return (
      <form onSubmit={handleFormSubmit}>
        <label>
          New label:
          <input type="text" value={newLabel} onChange={handleNewLabelChange} />
        </label>
        <button type="submit">Add label</button>
      </form>
    );
  };
  
const LabelDropdown = ({ onSelectLabel }) => {
    const handleLabelSelected = (event) => {
      const selectedLabelId = parseInt(event.target.value);
      const selectedLabel = labels.find((label) => label.id === selectedLabelId);
      onSelectLabel(selectedLabel);
    };
  
    return (
      <select onChange={handleLabelSelected}>
        <option value="">Select a label</option>
        {labels.map((label) => (
          <option key={label.id} value={label.id}>
            {label.name}
          </option>
        ))}
      </select>
    );
};

const PriorityDropdown = ({ onSelectPriority }) => {
    const handlePrioritySelected = (event) => {
      const selectedPriority = event.target.value;
      onSelectPriority(selectedPriority);
    };
  
    return (
      <select onChange={handlePrioritySelected}>
        <option value="low">Low priority</option>
        <option value="medium">Medium priority</option>
        <option value="high">High priority</option>
      </select>
    );
  };
  

export default Labels;
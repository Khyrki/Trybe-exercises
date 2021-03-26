const handleChange = (target) => ({
  type: 'INPUT_INSERT_INFORMATION',
  name: target.name,
  value: target.value,
});

export default handleChange;
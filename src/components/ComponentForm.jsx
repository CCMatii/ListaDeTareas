import { TextInput, Button, Group } from '@mantine/core';
import { useField } from '@mantine/form';

function ComponentForm({ addTask }) {
  const field = useField({
    initialValue: '',
    validate: (value) => (value.trim() !== '' ? addTask(value) : 'Task cannot be empty'),
  });
  
  return (
    <Group>
      <TextInput
        {...field.getInputProps()}
        placeholder="Add task"
        mb="md"
        flex={1}
        style={{ marginTop: 17 }}
      />
      <Button
      variant="gradient"
      gradient={{ from: 'blue', to: 'grape', deg: 90 }}
      onClick={field.validate}
    >
      Add
    </Button>
    </Group>
  );
}

export default ComponentForm;
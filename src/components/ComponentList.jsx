import { Checkbox, Paper, Button, Group } from '@mantine/core';

function ComponentList({ tasks, toggleTask, removeTask }) {
  return (
    <>
      {tasks.map((task) => (
        <Paper key={task.id} shadow="xl" radius="lg" p="xl" mb="sm">
          <Group>
          <Checkbox
          label={task.name}
          checked={task.completed}
          mb="sm"
          onChange={() => toggleTask(task.id)}
          />
          <Button
          variant="gradient"
          gradient={{ from: 'red', to: 'grape', deg: 90 }}
          onClick={() => removeTask(task.id)}
          >
          Delete
          </Button>
          </Group>
        </Paper>
      ))}
    </>
  );
}

export default ComponentList;
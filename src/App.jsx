import './App.css'
import '@mantine/core/styles.css';
import ComponentForm from './components/ComponentForm';
import ComponentList from './components/ComponentList';
import { MantineProvider } from '@mantine/core';
import TodoApp from './components/TodoApp';

export default function App() {
  return (
    <MantineProvider>
      <>
        <TodoApp/>
      </>
    </MantineProvider>
  );
}

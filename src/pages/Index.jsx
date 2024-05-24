import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="xl" mb={6}>
          Todo App
        </Heading>
        <Flex w="100%" mb={4}>
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            mr={2}
          />
          <Button onClick={addTask} colorScheme="teal">
            Add Task
          </Button>
        </Flex>
        <List spacing={3} w="100%">
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              p={2}
              borderWidth={1}
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              bg={task.completed ? "green.100" : "white"}
            >
              <Checkbox
                isChecked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
                mr={2}
              />
              <Text
                flex="1"
                textDecoration={task.completed ? "line-through" : "none"}
              >
                {task.text}
              </Text>
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                onClick={() => deleteTask(index)}
                colorScheme="red"
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
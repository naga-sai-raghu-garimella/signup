import React, { useEffect, useState } from "react";
import {
  Stack,
  Button,
  List,
  Container,
  ListItem,
  TextField,
  Box,
  Typography,
  Checkbox,
  ListItemText,
} from "@mui/material";
import ConfirmDialog from "./ConfirmDialog";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { LOCAL_STORAGE_KEY } from "../utils/constants";

//Adding, updating, deleting the tasks
const TodoTasks = () => {
  const [input, setInput] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [open, openChange] = useState(false);
  const [editMode, setEditMode] = useState(false);


  // get data from local storage
  const [listOfTasks, setListOfTasks] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  });

  const [error, setError] = useState(null);

  function openPop() {
    openChange(true);
  }

  function closePop() {
    openChange(false);
  }

  // set data to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listOfTasks));
  }, [listOfTasks]);

  //handling updated input
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  //adding tasks
  const handleClick = () => {
    const id = listOfTasks.length + 1;
    const isTaskExist = listOfTasks.some((task) => task.task === input);

    if (!input) {
      setError("Please Enter the Task");
    }
    else if (isTaskExist) {
      setError("Task already exists");
    }
     else {
      setError(null);
      setListOfTasks((prev) => [
        ...prev,

        {
          id: id,
          task: input,
          completed: false,
        },
      ]);
    }
    setInput("");
  };

  // finding task by id
  const findById = (id) => {
    listOfTasks.find((task) => (task.id === id ? setInput(task.task) : ""));
    setEditMode(true);
  };

  //updating task by id
  const handleUpdate = (id, newText) => {
    setEditMode(false);
      setListOfTasks(
        listOfTasks.map((todo) =>
          todo.id === id ? { ...todo, task: newText } : todo
        )
      );
    setInput("");
  };

  //setting delete id
  const handleDeleteTask = (id) => {
    setDeleteId(id);
    openPop();
  };

  //delete by id
  const handleDelete = () => {
    setListOfTasks(listOfTasks.filter((task) => task.id !== deleteId));
    closePop();
  };

  //remove all tasks
  const removeAllTasks = () => {
    if (listOfTasks.length === 0) {
      setError("No tasks available");
    } else {
      setListOfTasks([]);
      setError("");
    }
  };

  //checking whether the task completed or not
  const handleComplete = (id) => {
    setListOfTasks(
      listOfTasks.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      })
    );
  };

  //rendering list of tasks
  return (
    <Container>
      <Box className="flex flex-col items-center mt-20 space-y-4">
        <Typography
          variant="h4"
          sx={{ fontFamily: "monospace", fontWeight: "700", color: "purple" }}
        >
          TASK-LIST
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            required
            value={input}
            onChange={handleInput}
            id="task"
            name="task"
            label="Enter Task"
          ></TextField>

          <Button
            className="max-h-[54px]"
            onClick={handleClick}
            variant="contained"
          >
            Add
          </Button>
        </Stack>
        <Typography className="text-red-700 pr-20">{error}</Typography>
        <Box className="w-full max-w-lg bg-gradient-to-t from-black via-gray-700 to-gray-800 p-4 rounded-md max-md:w-screen px-0">
          <List>
            <Typography className="font-bold pl-4 text-white" variant="h5">
              List of tasks
            </Typography>
            {listOfTasks.map((task) => {
              return (
                <Box key={task.id}>
                  <ListItem>
                    <Box className="bg-white flex items-center w-full rounded-lg">
                      <Checkbox
                        checked={task.completed}
                        color="success"
                        onClick={() => {
                          handleComplete(task.id);
                        }}
                      />
                      <ListItemText primary={task.task}></ListItemText>
                      <ListItemText
                        className="text-green-700"
                        primary={task.completed ? "Task completed!" : ""}
                      />
                      <Box className="space-x-3 p-1">
                        <EditNoteIcon
                          variant="contained"
                          onClick={() => findById(task.id)}
                        />
                        <Button
                        disabled={!editMode}
                          className="w-8 text-xl h-7 items-center"
                          variant="contained"
                          onClick={() => {
                            handleUpdate(task.id, input);
                          }}
                        >
                          Update
                        </Button>
                        <DeleteOutlineIcon
                          className="text-red-600"
                          variant="outlined"
                          onClick={() => handleDeleteTask(task.id)}
                        />
                      </Box>
                    </Box>
                  </ListItem>
                </Box>
              );
            })}
          </List>
        </Box>
        <Button  sx={{
            backgroundColor: "grey",
            color: "white",
            "&:hover": {
              backgroundColor: "black",
            },
          }} onClick={removeAllTasks}>
          Clear All
        </Button>
      </Box>
      <ConfirmDialog open={open} handleDelete={handleDelete} close={closePop} />
    </Container>
  );
};

export default TodoTasks;

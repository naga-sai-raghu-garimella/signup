import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Stack, Button, List, Container, ListItem } from "@mui/material";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import ConfirmDialog from "./ConfirmDialog";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { LOCAL_STORAGE_KEY } from "./Utils/constants";

//Adding, updating, deleting the tasks
const TodoTasks = () => {
  const [input, setInput] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [open, openChange] = useState(false);

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

    if (!input) {
      setError("Please Enter the Task");
    } else {
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
  };

  //updating task by id
  const handleUpdate = (id, newText) => {
    if (!input) {
      setError("Incorrect update");
    } else {
      setError(null);
      setListOfTasks(
        listOfTasks.map((todo) =>
          todo.id === id ? { ...todo, task: newText } : todo
        )
      );
    }
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
    setListOfTasks([]);
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
          sx={{ fontFamily: "monospace", fontWeight: "700" }}
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
        <Box className="w-full max-w-lg bg-slate-400 p-4 rounded-md max-md:w-screen px-0">
          <List>
            <Typography className="font-bold pl-4" variant="h5">
              List of tasks
            </Typography>
            {listOfTasks.map((task) => {
              return (
                <Box key={task.id}>
                  <ListItem>
                    <Box className="bg-slate-300 gap-2 flex items-center w-full rounded-lg">
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
        <Button variant="outlined" onClick={removeAllTasks}>
          Clear All
        </Button>
      </Box>
      <ConfirmDialog open={open} handleDelete={handleDelete} close={closePop} />
    </Container>
  );
};

export default TodoTasks;

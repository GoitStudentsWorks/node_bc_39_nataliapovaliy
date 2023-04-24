import React from 'react';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from '../ColumnsTasksList/ColumnsTasksList';
import { ColumnWrapper } from './TasksColumn.styled';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';

export const TasksColumn = ({ getTypeOfColumn,date, title, tasks, getTask }) => {
  // console.log('TasksColumn', date)
  return (
    <ColumnWrapper>
      <ColumnHeadBar title={title} getTypeOfColumn={getTypeOfColumn} tasks={tasks} date={date} />
      {tasks.length > 0 && <ColumnsTasksList tasks={tasks} getTask={getTask} />}
      <AddTaskBtn getTypeOfColumn={getTypeOfColumn} title={title} date={date} />
    </ColumnWrapper>
  );
};

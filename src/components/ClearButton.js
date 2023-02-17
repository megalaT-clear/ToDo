import React from 'react';
import { Button } from '@mui/material';
import TodoManager from '../services/TodoManager';

const ClearButton = (context) => {
	const { state, setState } = context;

	return (
		<Button
			onClick={ () => setState({
				...state,
				toDos: TodoManager.clear(context),
			}) }
		>Clear
		</Button>);
};

export default ClearButton;
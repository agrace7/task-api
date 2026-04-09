import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completed) {
  let completedFilter;
  if (completed === undefined) {
    completedFilter = undefined;
  } else {
    completedFilter = completed === 'true';
  }
  return taskRepository.findAll(completedFilter);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";
import { vi, expect, describe, test, beforeEach } from "vitest";

const todo = {
  text: "Test Todo",
  done: false,
};

const doneTodo = {
  ...todo,
  done: true,
};

describe("<Todo /> + done: false", () => {
  const onClickComplete = vi.fn();
  const onClickDelete = vi.fn();
  const user = userEvent.setup();

  beforeEach(() => {
    render(
      <Todo
        todo={todo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
    );
  });

  test("Todo component renders with the correct text", () => {
    expect(screen.getByText("Test Todo")).toBeDefined();
  });

  test('Complete button is correctly called upon user pressing "Set as done"', async () => {
    await user.click(screen.getByRole("button", { name: "Set as done" }));
    expect(onClickComplete).toHaveBeenCalled();
  });

  test('Delete button is correctly called upon user pressing "Delete"', async () => {
    await user.click(screen.getByRole("button", { name: "Delete" }));
    expect(onClickDelete.mock.calls).toHaveLength(1);
  });
});

describe("<Todo /> + done: true", () => {
  const onClickComplete = vi.fn();
  const onClickDelete = vi.fn();

  test('Todo component does not render "Set as done" button if done: true', () => {
    render(
      <Todo
        todo={doneTodo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
    );

    expect(screen.queryByText("Set as done")).toBeNull();
  });
});

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from "@testing-library/react";
import BoxList from './BoxList'

const addBox = (boxList, height = "50px", width = "50px", color = "peachpuff") => {
  const heightInput = boxList.getByLabelText("Height:");
  const widthInput = boxList.getByLabelText("Width:");
  const backgroundInput = boxList.getByLabelText("Background Color:");
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxList.getByText("Add me!");
  fireEvent.click(button);
}

it("renders without crashing", () => {
  render(<BoxList />)
})

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />)
  expect(asFragment()).toMatchSnapshot()
})

it("should add new box", () => {
  const boxList = render(<BoxList />);


  //no box yet
  expect(boxList.queryByText('Width: 50px')).not.toBeInTheDocument()

  //click add
  addBox(boxList)
  boxList.debug()

  //box exits now
  const removeButton = boxList.queryByText("X");
  const boxElement = removeButton.parentElement;
  expect(boxElement.firstChild).toHaveStyle(`
    width: 50px;
    height: 50px;
    backgroundColor: chocolate;
  `);
  // expect form to be empty
  expect(render(<BoxList />).getAllByDisplayValue("")).toHaveLength(3);
})

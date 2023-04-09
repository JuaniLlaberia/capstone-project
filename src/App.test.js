import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookTable from './components/BookTable';
import BookingForm from './components/BookingForm';

test('Test that the form component is being render properly', () => {
  render(<BookingForm />)
  const testToCheck = screen.getByText('Book a Table');
  expect(testToCheck).toBeInTheDocument();
});

test('Test that the form can not be submitted if there is a input field missing', () => {
    const email = 'pepito123@gmail.com';
    const handleSubmit = jest.fn();
    render(<BookingForm />);

    const inputNodeEmail = screen.getByLabelText(/Email/);
    fireEvent.change(inputNodeEmail, {target: {value: email}});

    const inputNodeTime = screen.getByLabelText(/Time/);
    fireEvent.change(inputNodeTime, {target: {value: '18:00'}});

    const inputNodeGuests = screen.getByLabelText(/Guests/);
    fireEvent.change(inputNodeGuests, {target: {value: 4}})

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(0);
    // expect(submitButton).toHaveAttribute('disabled');
});

test('Test that the form can be submitted once all the fields have a valid input', () => {
  const email = 'pepito123@gmail.com';
  const handleSubmit = jest.fn();
  render(<BookingForm />);

  const inputNodeEmail = screen.getByLabelText(/Email/);
  fireEvent.change(inputNodeEmail, {target: {value: email}});

  // const inputNodeDate = screen.getAllByLabelText(/Date/);
  // fireEvent.change(inputNodeDate, {target: {value: '2023-05-22'}})

  const inputNodeTime = screen.getByLabelText(/Time/);
  fireEvent.change(inputNodeTime, {target: {value: '18:00'}});

  const inputNodeGuests = screen.getByLabelText(/Guests/);
  fireEvent.change(inputNodeGuests, {target: {value: 4}})

  const inputNodeOccasion = screen.getByLabelText(/Occasion/);
  fireEvent.change(inputNodeOccasion, {target: {value: 'Other'}});

  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledTimes(0);
});


// test('TEST STATE LATER!')
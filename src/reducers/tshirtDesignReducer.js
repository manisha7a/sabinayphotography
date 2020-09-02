const name = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/';
const INITIAL_STATE = {
    designs: [
    {id: 1, src: `${name}black`, name: 'Project One'},
    {id: 2, src: `${name}blue`, name: 'Project Two'},
    {id: 3, src: `${name}white`, name: 'Project Three'},
]}

export default (state = INITIAL_STATE, action) => {
  return state;
}
import * as React from 'react';
import Hello from './Hello';
import Login from './Login';

// export interface Props {
  // name: string;
  // enthusiasmLevel?: number;
// }

// const Hello = ({ name, enthusiasmLevel = 1 }: Props) => {
  
//   const getExclamationMarks = (numChars: number) => {
//     return Array(numChars + 1).join('!');
//   }

//   if (enthusiasmLevel <= 0) {
//     throw new Error('这个不行');
//   }
//   return (
//     <div>
//       Hello {name + getExclamationMarks(enthusiasmLevel)}
//     </div>
//   );
// }

//类写法
// class Hello extends React.Component<Props, object> {
//   render() {
//     const { name, enthusiasmLevel = 1 } = this.props;
//     if (enthusiasmLevel <= 0) {
//       throw new Error('这个不行');
//     }

//     const getExclamationMarks = (numChars: number) => {
//       return Array(numChars + 1).join('!');
//     }
  
//     return (
//       <div>
//         Hello {name + getExclamationMarks(enthusiasmLevel)}
//       </div>
//     );
//   }
// }

export default () => (
  <div>
    {/* <Hello {...{ name: '小狼', enthusiasmLevel: 10 }} /> */}
    <Login />
  </div>
);


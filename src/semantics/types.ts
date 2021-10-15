// General Types
export type NonVoidType = 'string' | 'float' | 'int' | 'bool'
export type Type = 'void' | NonVoidType
export type TypeError = 'Type Error'
export type Kind = 'array' | 'matrix'

// ! Variable Directory Types
// * This is an object so we can index by identifier name
// Example:
// | name       | type    | args            | varsTable                 |
// ----------------------------------------------------------------------
// | myFunc     | double  | none            | *Ref to varTable*         |
// | myFunc2    | int     | [int, int, int] | 2                         |

export interface FuncTableValue {
  type?: Type
  args?: Type[]
  varsTable?: VarTable
}
export type FuncTable = Record<string, FuncTableValue>

// ! Variable Directory Types
// * This is an object so we can index by identifier name
// Example:
// | name       | type    | kind  | address (virtual address) |
// -----------------------------------------------------------
// | something  | double  | none  | 1                         |
// | otherThing | int     | array | 2                         |
export interface VarTableValue {
  type: Type
  kind?: Kind
  addr: number
}
export type VarTable = Record<string, VarTableValue>

// ! Semantic Cube
export type Operator = '+' | '-' | '*' | '/' | '<' | '>' | '<=' | '>=' | '==' | '!=' | '&&' | '||'
// * To store operator / operands relationship
// General structure:
// <type> <operator> <type> = <type>
export type OperatorRecord = Record<NonVoidType, Record<NonVoidType, NonVoidType | TypeError>>
export type SemanticCube = Record<Operator, OperatorRecord>

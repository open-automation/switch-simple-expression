# simple-expression
Evaluate simple boolean or arithmetic expressions with binary operators. 

<img src="http://i.imgur.com/bOIfdNM.png">

## Flow element properties

### Expression type

#### Boolean
Returns true or false using the following operators:
- ==
- !=
- !==
- >
- >=
- <
- <=

Boolean expressions will route to the success data out for true and error data out for false.

#### Arithmetic
Returns an integer value using the following operators:
- +
- -
- /
- *
- %

Arithmetic expression will always route to the success data out.

### Left operand
Left operand of the expression. ( X + 5 )

### Right operand
Right operand of the expression.( 5 + X )

### Result private data key
Save the resulting value to a private data key.

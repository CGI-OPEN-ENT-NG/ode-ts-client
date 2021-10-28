[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / TimeoutError

# Interface: TimeoutError<T, M\>

[RxJS](../modules/rxjs.md).TimeoutError

An error emitted when a timeout occurs.

## Type parameters

Name | Default |
:------ | :------ |
`T` | *unknown* |
`M` | *unknown* |

## Hierarchy

* *Error*

  ↳ **TimeoutError**

## Table of contents

### Properties

- [info](rxjs.timeouterror.md#info)
- [message](rxjs.timeouterror.md#message)
- [name](rxjs.timeouterror.md#name)
- [stack](rxjs.timeouterror.md#stack)

## Properties

### info

• **info**: *null* \| *TimeoutInfo*<T, M\>

The information provided to the error by the timeout
operation that created the error. Will be `null` if
used directly in non-RxJS code with an empty constructor.
(Note that using this constructor directly is not recommended,
you should create your own errors)

Defined in: node_modules/rxjs/dist/types/internal/operators/timeout.d.ts:49

___

### message

• **message**: *string*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: *string*

Inherited from: void

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

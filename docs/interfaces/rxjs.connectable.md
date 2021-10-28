[ode-ts-client](../README.md) / [Exports](../modules.md) / [RxJS](../modules/rxjs.md) / Connectable

# Interface: Connectable<T\>

[RxJS](../modules/rxjs.md).Connectable

An observable with a `connect` method that is used to create a subscription
to an underlying source, connecting it with all consumers via a multicast.

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*Observable*](../classes/rxjs.observable.md)<T\>

  ↳ **Connectable**

## Table of contents

### Properties

- [operator](rxjs.connectable.md#operator)
- [source](rxjs.connectable.md#source)

### Methods

- [connect](rxjs.connectable.md#connect)
- [forEach](rxjs.connectable.md#foreach)
- [lift](rxjs.connectable.md#lift)
- [pipe](rxjs.connectable.md#pipe)
- [subscribe](rxjs.connectable.md#subscribe)
- [toPromise](rxjs.connectable.md#topromise)

## Properties

### operator

• **operator**: *undefined* \| [*Operator*](rxjs.operator.md)<any, T\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

Inherited from: [Observable](../classes/rxjs.observable.md).[operator](../classes/rxjs.observable.md#operator)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:22

___

### source

• **source**: *undefined* \| [*Observable*](../classes/rxjs.observable.md)<any\>

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.

Inherited from: [Observable](../classes/rxjs.observable.md).[source](../classes/rxjs.observable.md#source)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:18

## Methods

### connect

▸ **connect**(): [*Subscription*](../classes/rxjs.subscription.md)

(Idempotent) Calling this method will connect the underlying source observable to all subscribed consumers
through an underlying [Subject](../classes/rxjs.subject.md).

**Returns:** [*Subscription*](../classes/rxjs.subscription.md)

A subscription, that when unsubscribed, will "disconnect" the source from the connector subject,
severing notifications to all consumers.

Defined in: node_modules/rxjs/dist/types/internal/types.d.ts:262

___

### forEach

▸ **forEach**(`next`: (`value`: T) => *void*): *Promise*<void\>

Used as a NON-CANCELLABLE means of subscribing to an observable, for use with
APIs that expect promises, like `async/await`. You cannot unsubscribe from this.

**WARNING**: Only use this with observables you *know* will complete. If the source
observable does not complete, you will end up with a promise that is hung up, and
potentially all of the state of an async function hanging out in memory. To avoid
this situation, look into adding something like [timeout](../modules/rxjs.md#timeout), [take](../modules/rxjs.md#take),
[takeWhile](../modules/rxjs.md#takewhile), or [takeUntil](../modules/rxjs.md#takeuntil) amongst others.

### Example:

```ts
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const source$ = interval(1000).pipe(take(4));

async function getTotal() {
   let total = 0;

   await source$.forEach(value => {
     total += value;
     console.log('observable -> ', value);
   });

   return total;
}

getTotal().then(
   total => console.log('Total:', total)
)

// Expected:
// "observable -> 0"
// "observable -> 1"
// "observable -> 2"
// "observable -> 3"
// "Total: 6"
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`next` | (`value`: T) => *void* | a handler for each value emitted by the observable   |

**Returns:** *Promise*<void\>

a promise that either resolves on observable completion or
 rejects with the handled error

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:101

▸ **forEach**(`next`: (`value`: T) => *void*, `promiseCtor`: PromiseConstructorLike): *Promise*<void\>

**`deprecated`** Passing a Promise constructor will no longer be available
in upcoming versions of RxJS. This is because it adds weight to the library, for very
little benefit. If you need this functionality, it is recommended that you either
polyfill Promise, or you create an adapter to convert the returned native promise
to whatever promise implementation you wanted. Will be removed in v8.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`next` | (`value`: T) => *void* | a handler for each value emitted by the observable   |
`promiseCtor` | PromiseConstructorLike | a constructor function used to instantiate the Promise   |

**Returns:** *Promise*<void\>

a promise that either resolves on observable completion or
 rejects with the handled error

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:113

___

### lift

▸ **lift**<R\>(`operator?`: [*Operator*](rxjs.operator.md)<T, R\>): [*Observable*](../classes/rxjs.observable.md)<R\>

Creates a new Observable, with this Observable instance as the source, and the passed
operator defined as the new observable's operator.

**`method`** lift

**`deprecated`** Internal implementation detail, do not use directly. Will be made internal in v8.
If you have implemented an operator using `lift`, it is recommended that you create an
operator by simply returning `new Observable()` directly. See "Creating new operators from
scratch" section here: https://rxjs.dev/guide/operators

#### Type parameters:

Name |
:------ |
`R` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`operator?` | [*Operator*](rxjs.operator.md)<T, R\> | the operator defining the operation to take on the observable   |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<R\>

a new observable with the Operator applied

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:52

___

### pipe

▸ **pipe**(): [*Observable*](../classes/rxjs.observable.md)<T\>

**Returns:** [*Observable*](../classes/rxjs.observable.md)<T\>

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:114

▸ **pipe**<A\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>): [*Observable*](../classes/rxjs.observable.md)<A\>

#### Type parameters:

Name |
:------ |
`A` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<A\>

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:115

▸ **pipe**<A, B\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>): [*Observable*](../classes/rxjs.observable.md)<B\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<B\>

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:116

▸ **pipe**<A, B, C\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\>): [*Observable*](../classes/rxjs.observable.md)<C\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<C\>

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:117

▸ **pipe**<A, B, C, D\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\>): [*Observable*](../classes/rxjs.observable.md)<D\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |
`D` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<D\>

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:118

▸ **pipe**<A, B, C, D, E\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\>): [*Observable*](../classes/rxjs.observable.md)<E\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |
`D` |
`E` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<E\>

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:119

▸ **pipe**<A, B, C, D, E, F\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\>, `op6`: [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\>): [*Observable*](../classes/rxjs.observable.md)<F\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\> |
`op6` | [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<F\>

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:120

▸ **pipe**<A, B, C, D, E, F, G\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\>, `op6`: [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\>, `op7`: [*OperatorFunction*](rxjs.operatorfunction.md)<F, G\>): [*Observable*](../classes/rxjs.observable.md)<G\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\> |
`op6` | [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\> |
`op7` | [*OperatorFunction*](rxjs.operatorfunction.md)<F, G\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<G\>

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:121

▸ **pipe**<A, B, C, D, E, F, G, H\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\>, `op6`: [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\>, `op7`: [*OperatorFunction*](rxjs.operatorfunction.md)<F, G\>, `op8`: [*OperatorFunction*](rxjs.operatorfunction.md)<G, H\>): [*Observable*](../classes/rxjs.observable.md)<H\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\> |
`op6` | [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\> |
`op7` | [*OperatorFunction*](rxjs.operatorfunction.md)<F, G\> |
`op8` | [*OperatorFunction*](rxjs.operatorfunction.md)<G, H\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<H\>

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:122

▸ **pipe**<A, B, C, D, E, F, G, H, I\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\>, `op6`: [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\>, `op7`: [*OperatorFunction*](rxjs.operatorfunction.md)<F, G\>, `op8`: [*OperatorFunction*](rxjs.operatorfunction.md)<G, H\>, `op9`: [*OperatorFunction*](rxjs.operatorfunction.md)<H, I\>): [*Observable*](../classes/rxjs.observable.md)<I\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |
`I` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\> |
`op6` | [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\> |
`op7` | [*OperatorFunction*](rxjs.operatorfunction.md)<F, G\> |
`op8` | [*OperatorFunction*](rxjs.operatorfunction.md)<G, H\> |
`op9` | [*OperatorFunction*](rxjs.operatorfunction.md)<H, I\> |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<I\>

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:123

▸ **pipe**<A, B, C, D, E, F, G, H, I\>(`op1`: [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\>, `op2`: [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\>, `op3`: [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\>, `op4`: [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\>, `op5`: [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\>, `op6`: [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\>, `op7`: [*OperatorFunction*](rxjs.operatorfunction.md)<F, G\>, `op8`: [*OperatorFunction*](rxjs.operatorfunction.md)<G, H\>, `op9`: [*OperatorFunction*](rxjs.operatorfunction.md)<H, I\>, ...`operations`: [*OperatorFunction*](rxjs.operatorfunction.md)<any, any\>[]): [*Observable*](../classes/rxjs.observable.md)<unknown\>

#### Type parameters:

Name |
:------ |
`A` |
`B` |
`C` |
`D` |
`E` |
`F` |
`G` |
`H` |
`I` |

#### Parameters:

Name | Type |
:------ | :------ |
`op1` | [*OperatorFunction*](rxjs.operatorfunction.md)<T, A\> |
`op2` | [*OperatorFunction*](rxjs.operatorfunction.md)<A, B\> |
`op3` | [*OperatorFunction*](rxjs.operatorfunction.md)<B, C\> |
`op4` | [*OperatorFunction*](rxjs.operatorfunction.md)<C, D\> |
`op5` | [*OperatorFunction*](rxjs.operatorfunction.md)<D, E\> |
`op6` | [*OperatorFunction*](rxjs.operatorfunction.md)<E, F\> |
`op7` | [*OperatorFunction*](rxjs.operatorfunction.md)<F, G\> |
`op8` | [*OperatorFunction*](rxjs.operatorfunction.md)<G, H\> |
`op9` | [*OperatorFunction*](rxjs.operatorfunction.md)<H, I\> |
`...operations` | [*OperatorFunction*](rxjs.operatorfunction.md)<any, any\>[] |

**Returns:** [*Observable*](../classes/rxjs.observable.md)<unknown\>

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:124

___

### subscribe

▸ **subscribe**(`observer?`: *Partial*<[*Observer*](rxjs.observer.md)<T\>\>): [*Subscription*](../classes/rxjs.subscription.md)

#### Parameters:

Name | Type |
:------ | :------ |
`observer?` | *Partial*<[*Observer*](rxjs.observer.md)<T\>\> |

**Returns:** [*Subscription*](../classes/rxjs.subscription.md)

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:53

▸ **subscribe**(`next`: (`value`: T) => *void*): [*Subscription*](../classes/rxjs.subscription.md)

#### Parameters:

Name | Type |
:------ | :------ |
`next` | (`value`: T) => *void* |

**Returns:** [*Subscription*](../classes/rxjs.subscription.md)

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:54

▸ **subscribe**(`next?`: *null* \| (`value`: T) => *void*, `error?`: *null* \| (`error`: *any*) => *void*, `complete?`: *null* \| () => *void*): [*Subscription*](../classes/rxjs.subscription.md)

**`deprecated`** Instead of passing separate callback arguments, use an observer argument. Signatures taking separate callback arguments will be removed in v8. Details: https://rxjs.dev/deprecations/subscribe-arguments

#### Parameters:

Name | Type |
:------ | :------ |
`next?` | *null* \| (`value`: T) => *void* |
`error?` | *null* \| (`error`: *any*) => *void* |
`complete?` | *null* \| () => *void* |

**Returns:** [*Subscription*](../classes/rxjs.subscription.md)

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:56

___

### toPromise

▸ **toPromise**(): *Promise*<undefined \| T\>

**`deprecated`** Replaced with [firstValueFrom](../modules/rxjs.md#firstvaluefrom) and [lastValueFrom](../modules/rxjs.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

**Returns:** *Promise*<undefined \| T\>

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:126

▸ **toPromise**(`PromiseCtor`: PromiseConstructor): *Promise*<undefined \| T\>

**`deprecated`** Replaced with [firstValueFrom](../modules/rxjs.md#firstvaluefrom) and [lastValueFrom](../modules/rxjs.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters:

Name | Type |
:------ | :------ |
`PromiseCtor` | PromiseConstructor |

**Returns:** *Promise*<undefined \| T\>

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:128

▸ **toPromise**(`PromiseCtor`: PromiseConstructorLike): *Promise*<undefined \| T\>

**`deprecated`** Replaced with [firstValueFrom](../modules/rxjs.md#firstvaluefrom) and [lastValueFrom](../modules/rxjs.md#lastvaluefrom). Will be removed in v8. Details: https://rxjs.dev/deprecations/to-promise

#### Parameters:

Name | Type |
:------ | :------ |
`PromiseCtor` | PromiseConstructorLike |

**Returns:** *Promise*<undefined \| T\>

Inherited from: [Observable](../classes/rxjs.observable.md)

Defined in: node_modules/rxjs/dist/types/internal/Observable.d.ts:130

[ode-ts-client](../README.md) / [Exports](../modules.md) / IExplorerFramework

# Interface: IExplorerFramework

Framework exploration capabilities offered to the client.

## Table of contents

### Methods

- [createContext](iexplorerframework.md#createcontext)
- [getBus](iexplorerframework.md#getbus)

## Methods

### createContext

▸ **createContext**(`types`: [*ResourceType*](../modules.md#resourcetype)[], `app`: [*App*](../modules.md#app)): [*IExplorerContext*](iexplorercontext.md)

Create a new context to explore resources from an application.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`types` | [*ResourceType*](../modules.md#resourcetype)[] | Types of resource to be managed in this context.   |
`app` | [*App*](../modules.md#app) | Application which creates the new context.    |

**Returns:** [*IExplorerContext*](iexplorercontext.md)

Defined in: [interfaces.ts:354](https://github.com/opendigitaleducation/infrontexplore/blob/640dc21/src/ts/interfaces.ts#L354)

___

### getBus

▸ **getBus**(): [*IBus*](ibus.md)

Retrieve the underlying communication bus.

**Returns:** [*IBus*](ibus.md)

Defined in: [interfaces.ts:359](https://github.com/opendigitaleducation/infrontexplore/blob/640dc21/src/ts/interfaces.ts#L359)

import "jasmine";
import * as MockData from './config/userinfo.json';
import { APP, framework, IExplorerContext, RESOURCE } from "../src/index";

/** Test the fundations of the framework. */
describe("Foundation", function() {
    var context:IExplorerContext|null = null;
    const userinfo = MockData.userinfo;

    beforeEach( ()=>{
        // nada ATM
    });

    /** @test Mocked data definition */
    //FIXME validate against jsonschema ?
    it("should have mocked data defined", () => { expect(userinfo.apps).toBeDefined(); });

    /** @test Framework bootstrapping */
    it("should be available", () => { expect(framework).toBeDefined(); });

    /** @test Getting an explorer context. */
    it("should not throw error", ()=>{
        context = framework.createContext( [RESOURCE.BLOG], APP.ANY );
    });
});
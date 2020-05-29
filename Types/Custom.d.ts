declare function UnlockedInteract(this: void, Guid: string): void;
declare const AddonName: string;
declare interface ITextureConfig {
    color: IColor;
    texture: string;
    width: number;
    height: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
    scale: number;
    alpha: number;
}
/** Does a native lua atan2 call, we need to use this because the transpiller will otherwise mess it up */
declare function DoAtan2(this: void, x: number, y: number): number;
/** Does a native Math.random lua call, this is different from the Typescript version of Math.Random as we can set min/max params */
declare function DoMathRan(this: void, Min: number, Max: number): number;

/** @tupleReturn */
declare function WorldToScreen(this: void, x: number, y: number, z: number): Position2D;

declare namespace LuaLibDraw {
    function Arc(this: void, X1: number, Y1: number, Z1: number, Radius: number, Degrees: number, Facing: number): void;
    function Arrow(this: void): void;
    function Box(this: void, X1: number, Y1: number, Z1: number, Width: number, Height: number, Rotation: number, OffsetX: number, OffsetY: number, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
    function Circle(this: void, X1: number, Y1: number, Z1: number, Radius: number, Size: number, Color?: { R: number, G: number, B: number, A: number }, ): void;
    function Circle(this: void, X1: number, Y1: number, Z1: number, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
    function ClearCanvas(this: void): void;
    function Line(this: void, X1: number, Y1: number, Z1: number, X2: number, Y2: number, Z2: number, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
    function Text(this: void, Text: string, Font: string, X1: number, Y1: number, Z1: number, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
    function Texture(this: void, Config: ITextureConfig, X: number, Y: number, Z: number, ForcedColor: IColor): void;
}
// declare namespace LibDraw {
//     function Arc(this: void, Position: Position, Radius: number, Degrees: number, Facing: number, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
//     function Arrow(this: void, Position: Position, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
//     function Box(this: void, Position: Position, Width: number, Height: number, Rotation: number, OffsetX: number, OffsetY: number, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
//     function Circle(this: void, Position: Position, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
//     function ClearCanvas(this: void): void;
//     function Line(this: void, Position1: Position, Position2: Position, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
//     function Text(this: void, Text: string, Font: string, Position: Position, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
//     function Texture(this: void, Config: ITextureConfig, Position: Position, ForcedColor: IColor): void;
// }


/***
-- Color 
interface IColor { 
    R: number; 
    G: number; 
    B: number; 
    A: number; 
    Hex: string; 
}
-- Texture
interface ITextureConfig {
    color: IColor;
    texture: string;
    width: number;
    height: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
    scale: number;
    alpha: number;
}
-- Draw Methods to draw a frame you need to draw it every frames. 
-- Every frames, the first access to the library will have it clears by itseld, no need to manually clear it.
function Box(X1: number, Y1: number, Z1: number, Width: number, Height: number, Rotation: number, OffsetX: number, OffsetY: number, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
function Circle(X1: number, Y1: number, Z1: number, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
function Line(X1: number, Y1: number, Z1: number, X2: number, Y2: number, Z2: number, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
function Text(Text: string, Font: string, X1: number, Y1: number, Z1: number, Size: number, Color?: { R: number, G: number, B: number, A: number }): void;
function Texture(Config: ITextureConfig, X: number, Y: number, Z: number, ForcedColor: IColor): void;

 */


 

import Plugin from "osbx/lib/core/plugin";
import { Easings, Layers, Options, Origins } from "osbx/lib/core/utils";

class osbx_core extends Plugin {

    GenerateBackground(startTime: number, endTime: number, background_path: string): void {
        let sprite = this.CreateSprite(background_path);
        sprite.Fade(startTime, 0, startTime + 300, 1, Easings.SineIn);
        sprite.Fade(endTime - 300, 1, endTime, 0, Easings.SineOut);
        sprite.Scale(startTime, 480.0 / 1080);
    }
}

export default new osbx_core;
export { osbx_core }

// H3-Base-Ref2VA -- omni-reference mode.
// Reference inputs: up to 9 images, up to 3 video clips, up to 3 audio clips
// (max 12 files total, <= 15s combined). Audio cannot be the sole input.
//
// Same pruned INT8 ConvRot treatment as FL2VA: 21.0 GB (vs 66.3 GB for bf16).
module.exports = {
  run: [
    {
      method: "hf.download",
      params: {
        path: "../app/models",
        _: ["Comfy-Org/MiniMax-H3", "diffusion_models/minimax_h3_ref2va_pruned_int8_convrot.safetensors"],
        "local-dir": "."
      }
    }
  ]
}

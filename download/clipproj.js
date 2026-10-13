// Download Clip Projection Model for AMD
module.exports = {
  run: [
    {
      method: "hf.download",
      params: {
        path: "../app/models",
        _: ["NicoLab28/ClipProj-MiniMax-H3", "mmh3-4b-ClipProj-v3.1-mlp.safetensors"],
        "local-dir": "clip_projections"
      }
    }
  ]
}
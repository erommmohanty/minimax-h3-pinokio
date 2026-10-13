// FastVideo Minimax H3 fl2va Model
module.exports = {
  run: [
    {
      method: "hf.download",
      params: {
        path: "../app/models",
        _: ["Kijai/MiniMax-H3-experimental", "minimax_h3_fastvideo_vsa_datafree_1300step_4step_int8_convrot.safetensors"],
        "local-dir": "diffusion_models"
      }
    }
  ]
}
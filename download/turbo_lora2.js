module.exports = {
  run: [
    {
      method: "hf.download",
      params: {
        path: "../app/models",
        _: ["lightx2v/Minimax-h3-Turbo", "minimax_h3_ref2v_turbo_8step_v1.0_768p_comfyui_bf16.safetensors"],
        "local-dir": "loras"
      }
    }
  ]
}
<template>
  <div class="wrapper">
    <div class="dropzone">
      <canvas
        ref="editorCanvas"
        width="335"
        height="212"
      />
    </div>
    <div class="details">
      <div class="details__file">
        <div class="details__label">
          Name
        </div>
        <div class="details__filename">
          {{ file.name }}
        </div>
      </div>
      <label for="upload">
        <input
          id="upload"
          name="upload"
          type="file"
          accept="image/*"
          @change="uploadImage($event)"
        >
        <span class="caret" />
        <span class="label">Upload</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
	name: 'ARUpload',
	props: {
		brightness: {
			type: Number,
			default: 0,
		},
		contrast: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			file: {},
			canvasContext: '',
			originalImageData: '',
			height: '',
			width: '',
		};
	},
	watch: {
		brightness() {
			this.updateCanvas();
		},
		contrast() {
			this.updateCanvas();
		},
	},
	methods: {
		uploadImage($event) {
			if ($event.target.files.length) {
				// eslint-disable-next-line prefer-destructuring
				this.file = $event.target.files[0];
				this.addImage();
			} else {
				this.$emit('uploaded', false);
			}
		},
		addImage() {
			const reader = new FileReader();
			reader.readAsDataURL(this.file);
			reader.onloadend = (event) => {
				const image = new Image();
				image.src = event.target.result;
				image.onload = () => {
					const canvas = this.$refs.editorCanvas;
					const context = canvas.getContext('2d');

					const hRatio = canvas.width / image.width;
					const vRatio = canvas.height / image.height;
					const ratio = Math.min(hRatio, vRatio);

					this.width = image.width * ratio;
					this.height = image.height * ratio;

					this.centreX = (canvas.width - this.width) / 2;
					this.centreY = (canvas.height - this.height) / 2;

					context.clearRect(0, 0, canvas.width, canvas.height);
					context.drawImage(image, 0, 0, image.width, image.height, this.centreX, this.centreY, this.width, this.height);

					const imageData = context.getImageData(this.centreX, this.centreY, this.width, this.height);
					this.originalImageData = imageData;

					context.putImageData(imageData, this.centreX, this.centreY);
					this.canvasContext = context;

					this.$emit('uploaded', true);
				};
			};
		},
		updateCanvas() {
			const canvasImageData = this.canvasContext.getImageData(this.centreX, this.centreY, this.width, this.height);

			this.alterBrightness(canvasImageData.data);
			this.alterContrast(canvasImageData.data);

			this.canvasContext.putImageData(canvasImageData, this.centreX, this.centreY);
		},
		alterBrightness(data) {
			const originalImageDataArray = this.originalImageData.data;
			for (let i = 0; i < data.length; i += 4) {
				// eslint-disable-next-line no-param-reassign
				data[i] = originalImageDataArray[i] + 255 * (this.brightness / 100);
				// eslint-disable-next-line no-param-reassign
				data[i + 1] = originalImageDataArray[i + 1] + 255 * (this.brightness / 100);
				// eslint-disable-next-line no-param-reassign
				data[i + 2] = originalImageDataArray[i + 2] + 255 * (this.brightness / 100);
			}
		},
		alterContrast(data) {
			const multiplicationFactor = (259.0 * (this.contrast + 255.0)) / (255.0 * (259.0 - this.contrast));

			for (let i = 0; i < data.length; i += 4) {
				// eslint-disable-next-line no-param-reassign
				data[i] = Math.max(0, Math.min(255, multiplicationFactor * (data[i] - 128.0) + 128.0));
				// eslint-disable-next-line no-param-reassign
				data[i + 1] = Math.max(0, Math.min(255, multiplicationFactor * (data[i + 1] - 128.0) + 128.0));
				// eslint-disable-next-line no-param-reassign
				data[i + 2] = Math.max(0, Math.min(255, multiplicationFactor * (data[i + 2] - 128.0) + 128.0));
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid #DCDEE4;
  border-radius: 5px;
}
.dropzone {
  border-bottom: 1px solid #DCDEE4;
  box-sizing: border-box;
  height: 212px;
  overflow: hidden;
  canvas {
    height: 100%;
    width: auto;
  }
}
.details {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  padding-top: 18px;
  .details__file {
    border: 1px solid #DCDEE4;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    overflow: hidden;
    width: 207px;
  }
  .details__label {
    background-color: #F6F8FA;
    border-right: 1px solid #DCDEE4;
    color: #8392A6;
    font-size: 11px;
    letter-spacing: 1px;
    line-height: 30px;
    text-align: center;
    text-transform: uppercase;
    width: 61px;
  }
  .details__filename {
    color: #25A95B;
    font-size: 11px;
    letter-spacing: 1px;
    line-height: 30px;
    overflow: hidden;
    padding: 0 6px;
    text-transform: uppercase;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  label {
    background-color: #F6F8FA;
    border: 1px solid #DCDEE4;
    border-radius: 5px;
    box-sizing: border-box;
    color: #4A90E2;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 87px;
    transition: all .2s ease;
    &:hover {
      background-color: #DCDEE4;
      transition: all .2s ease;
    }
    input {
      display: none;
    }
    .caret {
      border-right: 5px solid transparent;
      border-bottom: 8px solid #4A90E2;
      border-left: 5px solid transparent;
      height: 0;
      width: 0;
    }
    .label {
      font-family: 'GraphikMedium';
      font-size: 12px;
      font-weight: normal;
      line-height: 25px;
      padding-left: 6px;
      text-transform: uppercase;
    }
  }
}
</style>

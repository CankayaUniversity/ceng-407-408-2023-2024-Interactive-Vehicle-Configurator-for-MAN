<template>
  <v-container fluid>
    <!-- MAN Logo -->
    <v-row>
      <v-col class="d-flex justify-start">
        <v-img
          src="https://upload.wikimedia.org/wikipedia/commons/5/54/Logo_MAN.png"
          contain
          max-height="60"
          max-width="100"
        ></v-img>
      </v-col>
    </v-row>

    <div>
      <v-row class="pt-0 grey darken-2">
        <!-- Type Dropdown -->

        <v-col>
          <v-row>
            <v-col>
              <v-select
                :itemProps="itemProps"
                v-model="selectedType"
                :items="types"
                label="Type"
                dense
                solo
                outlined
                hide-details
              ></v-select>
            </v-col>

            <!-- Gattung Dropdown -->
            <v-col>
              <v-select
                :itemProps="itemProps"
                v-model="selectedGattung"
                :items="gattungs"
                label="Gattung"
                dense
                solo
                outlined
                hide-details
              ></v-select>
            </v-col>
          </v-row>
          <!-- Bus Image -->
          <!-- <v-row class="">
            <v-img width="500" class="wrapper" :src="`${img}`" alt="img">
              <svg
                class="cam"
                width="48"
                height="29"
                viewBox="0 0 48 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 14.5L40.75 1.94263V27.0574L19 14.5Z"
                  fill="#6887F5"
                />
                <rect width="29" height="29" rx="3" fill="#6887F5" />
              </svg>

              <svg
                class="cam1"
                width="48"
                height="29"
                viewBox="0 0 48 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 14.5L40.75 1.94263V27.0574L19 14.5Z"
                  fill="#6887F5"
                />
                <rect width="29" height="29" rx="3" fill="#6887F5" />
              </svg>
              <svg
                id="cam2"
                class="cam2"
                width="48"
                height="29"
                viewBox="0 0 48 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 14.5L40.75 1.94263V27.0574L19 14.5Z"
                  fill="#6887F5"
                />
                <rect width="29" height="29" rx="3" fill="#6887F5" />
              </svg>
            </v-img>
          </v-row> -->
        </v-col>

        <!-- Main Group Dropdown -->
        <v-col @onclick="react()">
          <v-select
            :itemProps="itemProps"
            v-model="selectedMainGroup"
            :items="mainGroups"
            label="Main Group"
            dense
            solo
            outlined
            hide-details
          ></v-select>
          <!-- Selection -->
          <v-col v-if="selectedMainGroup != null">
            <v-card>
              <v-select
                v-for="product in comModels"
                :itemProps="itemProps"
                v-model="selectedModel[product.name]"
                :key="product.name"
                :items="product.types"
                :label="product.name"
                dense
                solo
                outlined
                hide-details
                class="ma-2"
              >
              </v-select>
            </v-card>
          </v-col>
        </v-col>

        <!-- export button -->
        <v-col cols="12" class="d-flex justify-end">
          <v-btn
            @click="xport(selectedModel)"
            color="primary"
            onclick="export()"
          >
            Export
          </v-btn>
        </v-col>

        <v-col v-if="xportbool == true" class="text-right" cols="12">
          {{ xportdata }}
        </v-col>
      </v-row>
    </div>

    <div class="bus-layout">
      <img
        src="@/static/12C-2T.jpg"
        alt="Bus Seating Chart"
        class="seating-chart"
      />

      <!-- Camera icon overlays -->
      <div
        v-for="camera in cameras"
        :key="camera.id"
        class="camera-overlay"
        :style="{ top: camera.top, left: camera.left }"
      >
        <div @click="activateCamera(camera.id)">
          <img
            v-if="activeCameraId === camera.id"
            :src="getCameraImage(camera.direction)"
            alt="Camera Direction"
            class="camera-icon"
          />
          <img
            v-else
            src="@/assets/Camera/Polygon1Cone.svg"
            alt="Inactive Camera"
            class="camera-icon"
          />
        </div>
      </div>

      <!-- Directional buttons (displayed when a camera is active) -->

      <div v-if="activeCameraId" class="direction-buttons">
        <div class="direction-row top-row">
          <button @click="changeDirection('up-left')" class="direction-button">
            <img
              :src="getImagePath('up-left')"
              alt="Up-Left"
              class="button-image"
            />
          </button>
          <button @click="changeDirection('up')" class="direction-button">
            <img :src="getImagePath('up')" alt="Up" class="button-image" />
          </button>
          <button @click="changeDirection('up-right')" class="direction-button">
            <img
              :src="getImagePath('up-right')"
              alt="Up-Right"
              class="button-image"
            />
          </button>
        </div>
        <div class="direction-row middle-row">
          <button @click="changeDirection('left')" class="direction-button">
            <img :src="getImagePath('left')" alt="Left" class="button-image" />
          </button>
          <div class="spacer"></div>
          <!-- this is the spacer div -->
          <button @click="changeDirection('right')" class="direction-button">
            <img
              :src="getImagePath('right')"
              alt="Right"
              class="button-image"
            />
          </button>
        </div>
        <div class="direction-row bottom-row">
          <button
            @click="changeDirection('down-left')"
            class="direction-button"
          >
            <img
              :src="getImagePath('down-left')"
              alt="Down-Left"
              class="button-image"
            />
          </button>
          <button @click="changeDirection('down')" class="direction-button">
            <img :src="getImagePath('down')" alt="Down" class="button-image" />
          </button>
          <button
            @click="changeDirection('down-right')"
            class="direction-button"
          >
            <img
              :src="getImagePath('down-right')"
              alt="Down-Right"
              class="button-image"
            />
          </button>
        </div>
      </div>

      <button class="reset-button" @click="resetCameras">Reset</button>
    </div>
  </v-container>
</template>

<script>
export default {
  computed: {
    comModels: function () {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].name == this.selectedMainGroup) {
          return this.products[i].subProducts;
        }
      }
      return "nothing";
    },

    img: function () {
      return "../src/static/" + this.selectedType + ".jpg";
    },
  },

  data() {
    return {
      cameras: [
        { id: 1, top: "20px", left: "50px", direction: "" },
        { id: 2, top: "50px", left: "100px", direction: "" },
        { id: 3, top: "100px", left: "500px", direction: "" },

        // Add more cameras as needed
      ],
      activeCameraId: null,

      selectedType: null,
      selectedMainGroup: null,
      selectedGattung: null,
      selectedModel: {},
      xportdata: {},
      xportbool: false,
      nazmi: "",

      types: [
        { name: "12C-2T", value: "12C-2T" },
        { name: "18C-3T", value: "18C-3T" },
        { name: "19C-4T", value: "19C-4T" },

        // Daha fazla type öğesi...
      ],
      mainGroups: [
        { name: "Chair Type", value: "Chair Type" },
        { name: "Chair Color", value: "Chair Color" },
        { name: "Camera", value: "Camera" },

        // Daha fazla main group öğesi...
      ],
      gattungs: [
        {
          name: "Überwachungsanlage Fahrgastraum",
          value: "Überwachungsanlage Fahrgastraum",
        },
        // Daha fazla gattung öğesi...
      ],

      products: [
        {
          name: "Camera",
          subProducts: [
            {
              name: "Type",
              types: [
                {
                  name: "CAM A",
                  value: "A",
                },
                {
                  name: "CAM B",
                  value: "B",
                },
              ],
            },
            {
              name: "Recorder",
              types: [
                {
                  name: "Yes",
                  value: 1,
                },
                {
                  name: "No",
                  value: 0,
                },
              ],
            },
            {
              name: "Lenght",
              types: [
                {
                  name: "1 Hour",
                  value: "1 Hour",
                },
                {
                  name: "2 Hour",
                  value: "2 Hour",
                },
              ],
            },
          ],
        },

        {
          name: "Chair Type",
          subProducts: [
            {
              name: "ChairModel",
              types: [
                {
                  name: "Chair A",
                  value: "A",
                },
                {
                  name: "Chair B",
                  value: "B",
                },
              ],
            },
          ],
        },

        {
          name: "Chair Color",
          subProducts: [
            {
              name: "Color",
              types: [
                {
                  name: "Red",
                  value: "Red",
                },
                {
                  name: "Blue",
                  value: "Blue",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  // ... methods, etc.
  methods: {
    xport(model) {
      this.xportdata = model;
      this.xportbool = true;
    },

    rotate(id) {
      document
        .getElementById(id)
        .style.setProperty("transform", "rotate(-90deg)");
    },

    itemProps(item) {
      return {
        title: item.name,
        value: item.value,
      };
    },

    activateCamera(cameraId) {
      this.activeCameraId = cameraId;
    },
    changeDirection(direction) {
      const camera = this.cameras.find((cam) => cam.id === this.activeCameraId);
      if (camera) {
        camera.direction = direction;
      }
    },
    getCameraImage(direction) {
      if (direction) {
        return require(`@/assets/DirectionImages/${direction}.png`);
      }
      return "@assets/Camera/Polygon1Cone.svg";
    },
    resetCameras() {
      this.cameras.forEach((camera) => {
        camera.direction = "";
      });
      // Optionally, clear the active camera as well
      this.activeCameraId = null;
    },
    getImagePath(direction) {
      return require(`@/assets/DirectionImages/${direction}.png`);
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
}

.cam {
  height: 10%;
  width: 10%;
  position: absolute;
  top: 66%;
  right: 3%;
  transform: rotate(220deg);
}

.cam1 {
  height: 10%;
  width: 10%;
  position: absolute;
  top: 66%;
  right: 43%;
  transform: rotate(270deg);
}
.cam2 {
  height: 10%;
  width: 10%;
  position: absolute;
  top: 66%;
  right: 89%;
  transform: rotate();
}

.bus-layout {
  position: relative;
  /* display: inline-block; Change as needed */
}

.seating-chart {
  width: 100%; /* Adjust as needed to fit your layout */
  height: auto;
}

.camera-overlay {
  position: absolute;
  cursor: pointer;
  /* make sure the size is appropriate for the icons */
  width: 30px; /* adjust as needed */
  height: 30px; /* adjust as needed */
}

.camera-icon {
  width: 100%;
  height: 100%;
}

.reset-button {
  position: absolute;
  bottom: 120px; /* Position the reset button appropriately */
  right: 360px;
  border: 3px solid grey;
}

.direction-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 50px; /* Adjust as needed */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Center horizontally */
}

.direction-buttons button {
  margin: 0 5px;
}

.direction-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 50px; /* Adjust as needed */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Center horizontally */
}

.direction-row {
  display: flex;
  justify-content: center;
}

.direction-row button {
  margin: 0 5px; /* Spacing between buttons */
}
.button-image {
  width: 20px; /* Set the width as desired */
  height: 20px; /* Set the height as desired */

  /* If you want to keep the aspect ratio, set only one dimension */
}

.top-row button,
.bottom-row button {
  margin: 0 10px; /* Adjust as needed for spacing */
}

.middle-row {
  margin: 10px 0; /* Adjust as needed for spacing between rows */
}

.direction-button {
  background: none;
  border: none;
  padding: 5px; /* Adjust as needed for padding around the image */
  cursor: pointer;
}

.spacer {
  width: 40px; /* Equal to the width of your button to ensure even spacing */
}

.button-image {
  width: 30px; /* Adjust as needed */
  height: 30px; /* Adjust as needed */
}
</style>

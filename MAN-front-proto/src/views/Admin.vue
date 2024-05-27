<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img
          src="https://upload.wikimedia.org/wikipedia/commons/5/54/Logo_MAN.png"
          max-height="300"
          max-width="300"
        ></v-img>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="text-center"
            >Welcome to the Admin Panel</v-card-title
          >
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <v-card-text>
            <!-- Your form or additional admin panel elements go here -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title
            >Main Group
            <v-dialog max-width="50%">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  size="small"
                  icon
                  class="ml-5"
                  color="green"
                  ><v-icon>mdi-plus</v-icon></v-btn
                >
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Add Main Group">
                  <v-card-text>
                    <v-text-field
                      v-model="addGroup"
                      :counter="10"
                      :rules="nameRules"
                      label="Name of Main Group"
                      hide-details
                      required
                    ></v-text-field>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      text="Close"
                      color="red"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>

            <v-dialog max-width="50%">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  size="small"
                  icon
                  class="ml-5"
                  color="red"
                  ><v-icon>mdi-delete</v-icon></v-btn
                >
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Delete A Main Group">
                  <v-card class="ma-3" v-for="groups in mainGroups">
                    {{ groups }}

                    <v-btn size="x-small" icon class="ml-5" color="red"
                      ><v-icon>mdi-delete</v-icon></v-btn
                    >
                  </v-card>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      text="Close"
                      color="red"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>

            <v-dialog max-width="50%">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  size="small"
                  icon
                  class="ml-5"
                  color="yellow"
                  ><v-icon>mdi-pencil</v-icon></v-btn
                >
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Edit A Main Group">
                  <v-select
                    :items="mainGroups"
                    v-model="selectedGroup"
                    label="Select an option"
                  ></v-select>

                  <v-textfield>
                    <v-text-field clearable label="New Name"></v-text-field>
                  </v-textfield>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      text="Close"
                      color="red"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template> </v-dialog
          ></v-card-title>
          <v-card-text>
            <v-select
              :itemProps="itemProps"
              v-model="selectedMainGroup"
              :items="mainGroups"
              label="Main Group"
              dense
              solo
              outlined
              hide-details
              @change="onMainGroupChange"
            ></v-select>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title
            >Gattung

            <v-dialog max-width="50%">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  size="small"
                  icon
                  class="ml-5"
                  color="green"
                  ><v-icon>mdi-plus</v-icon></v-btn
                >
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Add Gattung">
                  <v-card-text>
                    <v-text-field
                      v-model="firstname"
                      :counter="10"
                      :rules="nameRules"
                      label="Name of Gattung"
                      hide-details
                      required
                    ></v-text-field>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      text="Close"
                      color="red"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>

            <v-dialog max-width="50%">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  size="small"
                  icon
                  class="ml-5"
                  color="red"
                  ><v-icon>mdi-delete</v-icon></v-btn
                >
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Delete A Gattung">
                  <v-card class="ma-3" v-for="gattung in gattungs">
                    {{ gattung.name }}

                    <v-btn size="x-small" icon class="ml-5" color="red"
                      ><v-icon>mdi-delete</v-icon></v-btn
                    >
                  </v-card>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      text="Close"
                      color="red"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>

            <v-dialog max-width="50%">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  size="small"
                  icon
                  class="ml-5"
                  color="yellow"
                  ><v-icon>mdi-pencil</v-icon></v-btn
                >
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Edit A Gattung">
                  <v-select
                    :itemProps="itemProps"
                    :items="filteredGattungs"
                    v-model="selectedGattung"
                    label="Select an option"
                  ></v-select>

                  <v-textfield>
                    <v-text-field clearable label="New Name"></v-text-field>
                  </v-textfield>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      text="Close"
                      color="red"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-card-title>
          <v-card-text>
            <v-select
              :itemProps="gattungProps"
              :items="filteredGattungs"
              v-model="selectedGattung"
              label="Gattung"
              :disabled="!selectedMainGroup || !filteredGattungs.length"
              item-text="name"
              item-value="name"
              dense
              solo
              outlined
              hide-details
            >
            </v-select>
            {{ selectedGattung }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <!-- Custom Part Selection -->

        <v-card class="custom-part">
          <v-card-title
            >Custom Part<v-dialog max-width="50%">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  size="small"
                  icon
                  class="ml-5"
                  color="green"
                  ><v-icon>mdi-plus</v-icon></v-btn
                >
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Add Gattung">
                  <v-card-text>
                    <v-text-field
                      v-model="firstname"
                      :counter="10"
                      :rules="nameRules"
                      label="Name of Gattung"
                      hide-details
                      required
                    ></v-text-field>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      text="Close"
                      color="red"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template> </v-dialog
          ></v-card-title>

          <v-card-text v-for="product in comModels" v-if="selectedGattung">
            <v-row>
              <v-col>
                <v-select
                  :itemProps="itemProps"
                  v-model="selectedModel[product.name]"
                  :key="product.id"
                  :items="product.types"
                  :label="product.name"
                  dense
                  solo
                  outlined
                  hide-details
                  class="ma-2"
                >
                </v-select>
              </v-col>
              <v-col cols="1">
                <v-btn
                  v-bind="activatorProps"
                  size="small"
                  icon
                  class="mt-4"
                  color="red"
                  ><v-icon>mdi-delete</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  watch: {
    selectedMainGroup() {
      this.onMainGroupChange();
    },
  },

  computed: {
    comModels: function () {
      for (let i = 0; i < this.products.length; i++) {
        if (
          this.products[i].gattungName == this.selectedGattung ||
          this.products[i].gattungName == this.selectedMainGroup
        ) {
          return this.products[i].subProducts;
        }
      }

      return "nothing";
    },

    filteredGattungs() {
      if (this.selectedMainGroup) {
        return this.gattungs.filter(
          (gattung) => gattung.value === this.selectedMainGroup
        );
      }

      return [];
    },
  },

  data() {
    return {
      selectedMainGroup: "",
      selectedGattung: "",
      selectedModel: {},
      addMainGroup: "",
      addGattung: "",
      addModel: {},
      dialog: false,

      mainGroups: [
        //{ name: "Chair Type", value: "Chair Type" },
        //{ name: "Chair Color", value: "Chair Color" },
        { name: "Camera", value: "Camera" },
        {
          name: "528M (Rear Target Display)",
          value: "528M (Rear Target Display)",
        },
        {
          name: "Sondernutzungsfläche gegenüber Tür 2", // Kapı 2'nin karşısındaki özel kullanım alanı
          value: "Sondernutzungsfläche gegenüber Tür 2",
        },
        {
          name: "Sondernutzungsfläche rechts vor Tür 2", // Kapı 2'nin önünde sağda özel kullanım alanı
          value: "Sondernutzungsfläche rechts vor Tür 2",
        },
        {
          name: "Bestuhlung", //Koltuklar
          value: "Bestuhlung",
        },
        {
          name: "Haltestangen", //Tutunma rayları
          value: "Haltestangen",
        },
        {
          name: "Abschrankung/Haarnadelstange an Tür 1", //Kapı 1'de bariyer / saç tokası çubuğu
          value: "Abschrankung/Haarnadelstange an Tür 1",
        },
      ],
      gattungs: [
        {
          name: "680A - SNF gegenüber Tür 2", // Sondernutzungsfläche gegenüber Tür 2'nin gattungu //1
          value: "Sondernutzungsfläche gegenüber Tür 2", // 680A - SNF karşı kapı 2
        },
        {
          name: "680D - Anlehnplatte/Klappsitze vor SNF gegenüber Tür 2", // Sondernutzungsfläche gegenüber Tür 2'nin gattungu //1
          value: "Sondernutzungsfläche gegenüber Tür 2", // 680D - SNF'nin önünde kapı 2'nin karşısında yaslanma plakası/katlanır koltuklar
        },
        {
          name: "681D - Anlehnplatte/Klappsitze vor SNF vor Tür 2", // Sondernutzungsfläche rechts vor Tür 2'nin gattungu //2
          value: "Sondernutzungsfläche rechts vor Tür 2", // 681D - 2 numaralı kapının önündeki SNF'nin önünde yaslanma plakası/katlanır koltuklar
        },
        {
          name: "704A - Bestuhlung", // Bestuhlung'un gattungu //3
          value: "Bestuhlung",
        },
        {
          name: "700B - Farbe-Fahrgastsitzgestell", // Bestuhlung'un gattungu //3
          value: "Bestuhlung", // 700B - Renkli yolcu koltuğu çerçevesi
        },
        {
          name: "78RI - Sitzhaltegriffe", // Bestuhlung'un gattungu //3
          value: "Bestuhlung", // 78RI - Koltuk tutma kolları
        },
        {
          name: "65A6 - Farbe der Haltestangen und Trennwände", // Haltestangen'un gattungu //4
          value: "Haltestangen", // 65A6 - Tutunma raylarının ve bölmelerin rengi
        },
        {
          name: "65LD - Abschrankung an Tür 1", // Abschrankung/Haarnadelstange an Tür 1'in gattungu //5
          value: "Abschrankung/Haarnadelstange an Tür 1", // 65LD - Kapı 1'de bölme
        },
      ],
      products: [
        {
          gattungName: "680A - SNF gegenüber Tür 2",
          subProducts: [
            {
              name: "Geeignet für E-Scooter.Mit E Scooter Piktogramm",
            },
            {
              name: "Verbau eines verkürsten Motorpodestes mit Ablagekasten",
            },
            {
              name: "Geeignet für E-Scooter Verbau eines verkürsten Motorpodestes",
            },
          ],
        },

        {
          gattungName: "680D - Anlehnplatte/Klappsitze vor SNF gegenüber Tür 2",
          subProducts: [
            {
              name: "Armlehne mit halter ohne Schloss",
            },
            {
              name: "mit klappbarer Armlehne auf dem Bügel",
            },
            {
              name: "Ausführing Trennwand mit Glasscheibe",
            },
            {
              name: "Bügel E-Scooter tauglich ausführen",
            },
          ],
        },

        {
          gattungName: "681D - Anlehnplatte/Klappsitze vor SNF vor Tür 2",
          subProducts: [
            {
              name: "Armlehne mit halter",
            },
            {
              name: "mit klappbarer Armlehne auf dem Bügel",
            },
            {
              name: "Ausführing Trennwand mit Glasscheibe",
            },
          ],
        },

        {
          gattungName: "704A - Bestuhlung",
          subProducts: [
            {
              name: "mit Schaum Sitzpolster",
            },
            {
              name: "mit Schaum Mückenpolster",
            },
            {
              name: "Alle Sitze Ohne Logo/Branding",
            },
            {
              name: "STER 8 MS",
            },
          ],
        },

        {
          gattungName: "700B - Farbe-Fahrgastsitzgestell",
          subProducts: [
            {
              name: "Fahrgastsitzgestell RAL 7037",
            },
          ],
        },
        {
          gattungName: "78RI - Sitzhaltegriffe",
          subProducts: [
            {
              name: "Topcloser in RAL 1023 verkehrsgelb",
            },
            {
              name: "Topcloser in RAL 7037 verkehrsgelb",
            },
            {
              name: "Topcloser in RAL 1023 verkehrsgelb für EM sitz",
            },
          ],
        },
        {
          gattungName: "65A6 - Farbe der Haltestangen und Trennwände",
          subProducts: [
            {
              name: "Nur Knoten in",
            },
            {
              name: "Nur Deckenhaltestangen in",
            },
          ],
        },

        {
          gattungName: "65LD - Abschrankung an Tür 1",
          subProducts: [
            {
              name: "zusätzlich Teleskopabschrankung an Tür 1",
            },
          ],
        },
      ],
    };
  },
  // ... methods, etc.
  methods: {
    itemProps(item) {
      return {
        title: item.name,
        value: item.value,
      };
    },
    //gattung name and mainGroup
    gattungProps(item) {
      return {
        title: item.name,
        value: item.name,
      };
    },

    onMainGroupChange() {
      this.selectedGattung = null;
      // Eğer filteredGattungs computed property'si reaktif değilse, bu metodda manuel olarak tetikleyebilirsiniz.
      this.filteredGattungs; // Bu satır computed property'yi manuel olarak tetiklemek için kullanılabilir.
    },
  },
};
</script>

<style scoped>
.custom-part {
  background-color: rgb(204, 204, 204);
}
</style>

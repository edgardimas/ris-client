<template>
  <div class="text-white flex flex-col gap-4">
    <div class="workspace-functional flex flex-row gap-4">
      <div class="column-functional">
        <div class="flex flex-row gap-4">
          <img src="../assets/icons/customerService.png" class="w-9" />
          <input type="checkbox" class="w-4" id="checkbox" v-model="checked" />
          <p class="mt-1">Procedure</p>
        </div>
        <div class="flex flex-row gap-4 mt-4">
          <img src="../assets/icons/customerService.png" class="w-9" />
          <input type="checkbox" class="w-4" id="checkbox" v-model="checked" />
          <p class="mt-1">Procedure</p>
        </div>
        <div class="flex flex-row gap-4 mt-4">
          <img src="../assets/icons/customerService.png" class="w-9" />
          <input type="checkbox" class="w-4" id="checkbox" v-model="checked" />
          <p class="mt-1">Procedure</p>
        </div>
      </div>
      <div class="column-functional">
        <div class="flex flex-row gap-4">
          <img src="../assets/icons/customerService.png" class="w-9" />
          <input type="checkbox" class="w-4" id="checkbox" v-model="checked" />
          <p class="mt-1">Procedure</p>
        </div>
        <div class="flex flex-row gap-4 mt-4">
          <img src="../assets/icons/customerService.png" class="w-9" />
          <input type="checkbox" class="w-4" id="checkbox" v-model="checked" />
          <p class="mt-1">Procedure</p>
        </div>
        <div class="flex flex-row gap-4 mt-4">
          <img src="../assets/icons/customerService.png" class="w-9" />
          <input type="checkbox" class="w-4" id="checkbox" v-model="checked" />
          <p class="mt-1">Procedure</p>
        </div>
      </div>
      <div class="column-functional">
        <div class="flex flex-row gap-4">
          <img src="../assets/icons/customerService.png" class="w-9" />
          <input type="checkbox" class="w-4" id="checkbox" v-model="checked" />
          <p class="mt-1">Procedure</p>
        </div>
        <div class="flex flex-row gap-4 mt-4">
          <img src="../assets/icons/customerService.png" class="w-9" />
          <input type="checkbox" class="w-4" id="checkbox" v-model="checked" />
          <p class="mt-1">Procedure</p>
        </div>
        <div class="flex flex-row gap-4 mt-4">
          <img src="../assets/icons/customerService.png" class="w-9" />
          <input type="checkbox" class="w-4" id="checkbox" v-model="checked" />
          <p class="mt-1">Procedure</p>
        </div>
      </div>
    </div>
    <div class="worspace-table mt-4">
      <table class="table-fixed border-collapse border border-white">
        <thead class="bg-table-head">
          <tr class="border border-white">
            <th class="border border-white px-4">Stat.</th>
            <th class="border border-white px-4">Name</th>
            <th class="border border-white px-4">Title</th>
            <th class="border border-white px-4">DOB</th>
            <th class="border border-white px-4">Gender</th>
            <th class="border border-white px-4">Patient ID</th>
            <th class="border border-white px-4">Email</th>
            <th class="border border-white px-4">Cell phone</th>
            <th class="border border-white px-4">Phone</th>
            <th class="border border-white px-4">Social Security no</th>
            <th class="border border-white px-4">Street</th>
            <th class="border border-white px-4">Zip code</th>
            <th class="border border-white px-4">City</th>
            <th class="border border-white px-4">Country</th>
            <th class="border border-white px-4">Blood Type</th>
          </tr>
        </thead>
        <tbody class="bg-table-body text-black text-center border border-white px-4">
          <tr>
            <td class="border border-white px-4">
              <img src="../assets/icons/lungScreen.png" class="w-4 row" />
            </td>
            <td class="border border-white px-4">Malcolm Lockyer</td>
            <td class="border border-white px-4">Mr.</td>
            <td class="border border-white px-4">30/1/1995</td>
            <td class="border border-white px-4">Male</td>
            <td class="border border-white px-4">VP1000</td>
            <td class="border border-white px-4">Malcom@mail.com</td>
            <td class="border border-white px-4">8817162111</td>
            <td class="border border-white px-4">1112233344</td>
            <td class="border border-white px-4">7781112311</td>
            <td class="border border-white px-4">Jl. Tawada Healthcare No. 17</td>
            <td class="border border-white px-4">12113</td>
            <td class="border border-white px-4">Jakarta</td>
            <td class="border border-white px-4">Indonesia</td>
            <td class="border border-white px-4">AB-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup></script>

<style>
.row {
  margin: 0 auto;
}
</style>

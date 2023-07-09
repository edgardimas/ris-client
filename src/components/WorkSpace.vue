<template>
  <div class="text-white flex flex-col gap-4">
    <div class="workspace-functional">
      <div>
        <img src="../assets/icons/customerService.png" class="w-10" />
      </div>
    </div>
    <div class="worspace-table">
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
        <tbody class="bg-table-body text-black text-center">
          <tr>
            <td><img src="../assets/icons/lungScreen.png" class="w-4 row" /></td>
            <td>Malcolm Lockyer</td>
            <td>Mr.</td>
            <td>30/1/1995</td>
            <td>Male</td>
            <td>VP1000</td>
            <td>Malcom@mail.com</td>
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

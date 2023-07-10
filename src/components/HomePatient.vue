<template>
  <div class="main flex flex-col gap-10">
    <div class="patient-functional flex flex-row">
      <div class="column-functional flex flex-col">
        <div>
          <label for="lastname"> Lastname: </label>
        </div>
        <div class="mt-4">
          <label for="firstname"> Firstname: </label>
        </div>
        <div class="mt-4">
          <label for="dob"> Date of birth: </label>
        </div>
      </div>
      <div class="column-functional flex flex-col ml-4">
        <div>
          <input type="text" id="lastname" v-model="input" class="pl-5" />
        </div>
        <div class="mt-4">
          <input type="text" id="firstname" v-model="input" class="pl-5" />
        </div>
        <div class="mt-4">
          <input type="text" id="dob" v-model="input" class="pl-5" />
        </div>
      </div>
      <div class="column-functional flex flex-col ml-8">
        <div class="flex gap-4 items-center button">
          <button class="flex flex-row rounded-sm items-center">
            <img
              src="../assets/icons/checklistPerson.png"
              id="register-patient"
              class="w-8 bg-theme-secondary"
            />
            <p for="register-patient" class="mx-4">Create Patient</p>
          </button>
        </div>
        <div class="flex gap-4 items-center mt-4 button">
          <button class="flex flex-row rounded-sm items-center">
            <img
              src="../assets/icons/bagPlus.png"
              id="register-patient"
              class="w-8 bg-theme-secondary"
            />
            <p for="register-patient" class="mx-4">Create Workflow</p>
          </button>
        </div>
      </div>
      <div class="column-functional flex flex-col ml-8">
        <div class="flex gap-4 items-center button">
          <button class="flex flex-row rounded-sm items-center">
            <img
              src="../assets/icons/editPencil.png"
              id="register-patient"
              class="w-8 bg-theme-secondary"
            />
            <p for="register-patient" class="mx-4">Edit Patient</p>
          </button>
        </div>
        <div class="flex gap-4 items-center mt-4 button">
          <button class="flex flex-row rounded-sm items-center">
            <img
              src="../assets/icons/mergePerson.png"
              id="register-patient"
              class="w-8 bg-theme-secondary"
            />
            <p for="register-patient" class="mx-4">Merge Patient</p>
          </button>
        </div>
      </div>
      <div class="column-functional flex flex-col ml-8">
        <div class="flex gap-4 items-center button">
          <button class="flex flex-row rounded-sm items-center">
            <img
              src="../assets/icons/checkForm.png"
              id="register-patient"
              class="w-8 bg-theme-secondary"
            />
            <p for="register-patient" class="mx-4">Change History</p>
          </button>
        </div>
        <div class="flex gap-4 items-center mt-4 button">
          <button class="flex flex-row rounded-sm items-center">
            <img
              src="../assets/icons/trashBin.png"
              id="register-patient"
              class="w-8 bg-theme-secondary"
            />
            <p for="register-patient" class="mx-4">Delete Patient</p>
          </button>
        </div>
      </div>
    </div>
    <div class="patient-table">
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
div.button {
  display: inline-block;
  min-width: 50px;
}
</style>

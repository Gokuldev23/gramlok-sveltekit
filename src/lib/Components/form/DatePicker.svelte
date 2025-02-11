<script lang="ts">
    import CalendarIcon from "lucide-svelte/icons/calendar";
    import {
	CalendarDate,
     DateFormatter,
     type DateValue,
     getLocalTimeZone
    } from "@internationalized/date";
    import { cn } from "$lib/utils.js";
    import { Button } from "$lib/Components/ui/button/index.js";
    import { Calendar } from "$lib/Components/ui/calendar/index.js";
    import * as Popover from "$lib/Components/ui/popover/index.js";
    
    const df = new DateFormatter("en-US", {
     dateStyle: "long"
    });
    
    let value: DateValue | undefined = undefined;
   </script>
    
   <Popover.Root>
    <Popover.Trigger>
     {#snippet child({ props })}
      <Button
       variant="outline"
       class={cn(
        "w-[240px] justify-start text-left font-normal",
        !value && "text-muted-foreground"
       )}
       {...props}
      >
       <CalendarIcon />
       {value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date"}
      </Button>
     {/snippet}
    </Popover.Trigger>
    <Popover.Content class="w-auto p-0" align="start">
     <Calendar 
        type="single" 
        bind:value
        minValue={new CalendarDate(1960, 1, 1)}
        maxValue={new CalendarDate(2009, 1, 1)}
        startDate={new CalendarDate(2000, 1, 1)}
         />
    </Popover.Content>
   </Popover.Root>
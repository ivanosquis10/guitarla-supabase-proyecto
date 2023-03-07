import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://msetvyvvrzdkntctbebj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zZXR2eXZ2cnpka250Y3RiZWJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczNTg4NjMsImV4cCI6MTk5MjkzNDg2M30.4WroVyP-I_423sieI59c6PhpNC7oAYymTfo7xicVbRw'
)

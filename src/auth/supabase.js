import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zxibcoynfkdvwakmrnet.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4aWJjb3luZmtkdndha21ybmV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyNTM1NDcsImV4cCI6MjAyNDgyOTU0N30.NatvRJwuz3O2Za9lQPAJPq0trhWuMJrN1o8K0v4q6fU'

export const supabase = createClient(supabaseUrl, supabaseKey)

